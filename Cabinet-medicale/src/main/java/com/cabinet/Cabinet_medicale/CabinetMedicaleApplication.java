package com.cabinet.Cabinet_medicale;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = {"com.cabinet"})
@EnableJpaRepositories(basePackages = "com.cabinet.repository")
@EntityScan(basePackages = "com.cabinet.entity")
public class CabinetMedicaleApplication {

	public static void main(String[] args) {
		SpringApplication.run(CabinetMedicaleApplication.class, args);
	}

}
