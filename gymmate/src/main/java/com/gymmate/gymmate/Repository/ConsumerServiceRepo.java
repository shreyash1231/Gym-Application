package com.gymmate.gymmate.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.gymmate.gymmate.Entity.Consumerdata;

@Repository
public interface ConsumerServiceRepo extends JpaRepository<Consumerdata,Long> {
    @Query(value = "select * from consumerdata where total_amount>amount_paid",nativeQuery = true)
    List<String[]> paymentstatus();
}
