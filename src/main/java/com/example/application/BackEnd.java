package com.example.application;

import com.vaadin.flow.server.connect.Endpoint;
import com.vaadin.flow.server.connect.auth.AnonymousAllowed;
import lombok.extern.log4j.Log4j2;

import java.util.Arrays;
import java.util.List;

@Log4j2
@Endpoint
public class BackEnd {

    @AnonymousAllowed
    public List<ComboItem> getComboItems(){
        return Arrays.asList(
                new ComboItem("1","Value 1"),
                new ComboItem("2", "Value 2"),
                new ComboItem("3", "Value 3"));
    }

    @AnonymousAllowed
    public String doSomethingWithCombo(FormData formData){
        log.info("Received Combo: "+formData.getItem());
        return formData.getItem().getName();
    }
}
