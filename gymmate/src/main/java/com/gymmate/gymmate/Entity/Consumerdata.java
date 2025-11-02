package com.gymmate.gymmate.Entity;

import java.time.LocalDate;
import java.time.Month;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Consumerdata {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long consumer_id;
    @Column(nullable=false)
    private String full_name;
    @Column(nullable=false)
    private String gender;
    @Column(nullable=false,unique=true)
    private String email_id;
    private LocalDate membership_start_Date;
    private LocalDate membership_end_date;
    @Column(nullable=false)
    private int membership_duration;
    @Column(nullable=false)
    private String primary_address;
    @Column(length=10,nullable=false,unique = true)
    private Long consumer_mobile_no;
    @Column(nullable=false)
    private Long amount_paid;
    @Column(nullable=false)
    private Long total_amount;
    private Long amount_remain;
}
