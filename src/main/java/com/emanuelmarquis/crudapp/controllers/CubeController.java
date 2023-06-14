package com.emanuelmarquis.crudapp.controllers;

import com.emanuelmarquis.crudapp.Cube;
import com.emanuelmarquis.crudapp.CubeException;
import com.emanuelmarquis.crudapp.ICubeRepo;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CubeController {

    private final ICubeRepo repo;

    CubeController(ICubeRepo repo) {
        this.repo = repo;
    }

    @GetMapping("/api/cubes")
    List<Cube> getAllCubes() {
        return this.repo.findAll();
    }

    @PostMapping("/api/cubes")
    Cube createCube(@RequestBody Cube newCube) {
        return repo.save(newCube);
    }

    @GetMapping("/api/cubes/{id}")
    Cube getCube(@PathVariable Long id) {
        return this.repo.findById(id).orElseThrow(() -> new CubeException(id));
    }

    @PutMapping("/api/cubes/{id}")
    Cube replaceCube(@RequestBody Cube newCube, @PathVariable Long id) {
        return this.repo.findById(id)
            .map((cube) -> {
                cube.msg = newCube.msg;
                cube.color = newCube.color;
                return this.repo.save(cube);
            }).orElseGet(() -> {
                newCube.setId(id);
                return repo.save(newCube);
            });
    }

    @DeleteMapping("/api/cubes")
    void deleteAllCubes() {
        this.repo.deleteAll();
    }

    @DeleteMapping("/api/cubes/{id}")
    void deleteCube(@PathVariable Long id) {
        this.repo.deleteById(id);
    }

    @ControllerAdvice
    class CubeControllerAdvice {

        @ResponseBody
        @ExceptionHandler(CubeException.class)
        @ResponseStatus(HttpStatus.NOT_FOUND)
        public String handleCubeNotFound(CubeException e) {
            return e.getMessage();
        }
    }
}
