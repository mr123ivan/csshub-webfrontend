package com.ccshub.ccsHub.controller;

import com.ccshub.ccsHub.entity.Merchandise;
import com.ccshub.ccsHub.entity.MerchandiseDto;
import com.ccshub.ccsHub.repository.MerchandiseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Controller
@RequestMapping("/merchandises")
public class MerchandiseController {

    @Autowired
    private MerchandiseRepository repo;

    @GetMapping
    public String getMerchandise(Model model){
        List<Merchandise> merchandises = repo.getMerchandise();
        model.addAttribute("merchandises",merchandises);
        return "merchandises/index";
    }

    @GetMapping("/create")
    public String showCreatePage(Model model){
        MerchandiseDto merchandiseDto = new MerchandiseDto();
        model.addAttribute("merchandiseDto", merchandiseDto);
        return "merchandises/create";
    }

    @GetMapping("/hello")
    @ResponseBody
    public String hello(){
        return "Welcome to the merchandise page.";
    }

    @PostMapping("/create")
    public String createMerchandise(
            @ModelAttribute MerchandiseDto merchandiseDto,
            BindingResult result
    ){
        Merchandise merchandise = new Merchandise();
        merchandise.setName(merchandiseDto.getName());
        merchandise.setDescription(merchandiseDto.getDescription());
        merchandise.setPrice(merchandiseDto.getPrice());
        merchandise.setStock(merchandiseDto.getStock());

        repo.createMerchandise(merchandise);

        return "redirect:/merchandises";
    }

    @GetMapping("/edit")
    public String showEditPage(
            Model model,
            @RequestParam int id
    ){
        Merchandise merchandise = repo.getMerchandise(id);
        if (merchandise==null){
            return "redirect:/merchandises";
        }

        model.addAttribute("merchandise",merchandise);

        MerchandiseDto merchandiseDto = new MerchandiseDto();
        merchandiseDto.setName(merchandise.getName());
        merchandiseDto.setDescription(merchandise.getDescription());
        merchandiseDto.setPrice(merchandise.getPrice());
        merchandiseDto.setStock(merchandise.getStock());

        model.addAttribute("merchandiseDto", merchandiseDto);

        return "merchandises/edit";
    }

    @PostMapping("/edit")
    public String updateMerchandise(
            Model model,
            @RequestParam int id,
            @ModelAttribute MerchandiseDto merchandiseDto,
            BindingResult result
    ) {
        Merchandise merchandise = repo.getMerchandise(id);
        if(merchandise == null){
            return "redirect:/merchandise";
        }
        model.addAttribute("merchandise", merchandise);

        if (result.hasErrors()){
            return "merchandises/edit";
        }

        //update Merchandise Details
        merchandise.setName(merchandiseDto.getName());
        merchandise.setDescription(merchandiseDto.getDescription());
        merchandise.setPrice(merchandiseDto.getPrice());
        merchandise.setStock(merchandiseDto.getStock());

        repo.updateMerchandise(merchandise);

        return "redirect:/merchandises";

    }

    @GetMapping("/delete")
    public String deleteMerchandise(
            @RequestParam int id
    ){
        repo.deleteMerchandise(id);

        return "redirect:/merchandises";
    }
}
