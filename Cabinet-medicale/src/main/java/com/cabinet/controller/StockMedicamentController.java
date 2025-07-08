package com.cabinet.controller;

import com.cabinet.entity.StockMedicament;
import com.cabinet.repository.StockMedicamentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/stockmedicament")
public class StockMedicamentController {
    @Autowired
    private StockMedicamentRepository stockMedicamentRepository;

    @GetMapping("/list")
    public ResponseEntity<List<StockMedicament>> findAll() {
        List<StockMedicament> list = (List<StockMedicament>) stockMedicamentRepository.findAll();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<StockMedicament> findById(@PathVariable Long id) {
        Optional<StockMedicament> stock = stockMedicamentRepository.findById(id);
        return stock.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/add")
    public ResponseEntity<StockMedicament> add(@RequestBody StockMedicament stock) {
        StockMedicament saved = stockMedicamentRepository.save(stock);
        return ResponseEntity.ok(saved);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        stockMedicamentRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/reste/{phrarmaceutical_id}")
    public ResponseEntity<Integer> getResteStock(@PathVariable int phrarmaceutical_id) {
        List<StockMedicament> mouvements = (List<StockMedicament>) stockMedicamentRepository.findAll();
        
        int reste = 0;
        for (StockMedicament mouvement : mouvements) {
            if (mouvement.getPhrarmaceutical_id() == phrarmaceutical_id) {
                if (mouvement.getType_mouvement() == 1) { // entrée
                    reste += mouvement.getQuantite();
                } else { // sortie (type_mouvement == 0)
                    reste -= mouvement.getQuantite();
                }
            }
        }
        
        return ResponseEntity.ok(reste);
    }
} 