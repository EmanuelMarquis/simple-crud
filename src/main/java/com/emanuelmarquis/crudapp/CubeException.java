package com.emanuelmarquis.crudapp;

public class CubeException extends RuntimeException {
    public CubeException(Long id) {
        super("Could not find cube of id: " + id);
    }
}
