package com.gymmate.gymmate.Service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gymmate.gymmate.Entity.Consumerdata;
import com.gymmate.gymmate.Repository.ConsumerServiceRepo;

@Service
public class ConsumerService {

    @Autowired
    private ConsumerServiceRepo consumerservicrepo;

    public void ConsumerSignup(Consumerdata consumerdata) {
        consumerdata.setMembership_start_Date(LocalDate.now());
        LocalDate endDate = LocalDate.now().plusMonths(consumerdata.getMembership_duration());
        consumerdata.setMembership_end_date(endDate);

        // Amount validation
        if (consumerdata.getTotal_amount() < consumerdata.getAmount_paid()) {
            throw new IllegalArgumentException("Amount paid cannot be greater than total amount.");
        }
        consumerdata.setAmount_remain(consumerdata.getTotal_amount() - consumerdata.getAmount_paid());

        // Save consumer
        consumerservicrepo.save(consumerdata);
    }

    public List<Consumerdata> viewconsumerdata() {
        return consumerservicrepo.findAll();
    }

    public List<String[]> paymentstatus() {
        return consumerservicrepo.paymentstatus();
    } 
}
