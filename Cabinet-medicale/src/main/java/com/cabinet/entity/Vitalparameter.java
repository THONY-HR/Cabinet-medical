package com.cabinet.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Vitalparameter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_vitalParameter;

    private String parameter;
    double value;
    double min;
    double max;
    int unite_id;

    public Vitalparameter() {}

    public Vitalparameter(String parameter,double val,double min,double maxVal,int idVal) {
        setParameter(parameter);
        setValue(val);
        setMin(min);
        setMax(maxVal);
        setUniteId(idVal);

    }

    public Long getId_vitalParameter() {
        return id_vitalParameter;
    }

    public void setId_vitalParameter(Long id_vitalParameter) {
        this.id_vitalParameter = id_vitalParameter;
    }

    public String getParameter() {
        return parameter;
    }

    public void setParameter(String parameter) {
        this.parameter = parameter;
    }

    public double getValue() {
        return value;
    }

    public void setValue(double val) {
        this.value = val;
    }

    public double getMin() {
        return min;
    }

    public void setMin(double val) {
        this.min = val;
    }


    public double getMax() {
        return max;
    }

    public void setMax(double val) {
        this.max = val;
    }

    public double getUniteId() {
        return unite_id;
    }

    public void setUniteId(int val) {
        this.unite_id = val;
    }
}
