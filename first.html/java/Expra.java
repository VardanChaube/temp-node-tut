class A{  
    A getA(){  
    return this;  
    }  
    void msg(){System.out.println("Hello java");}  
    }  
    class Expra{  
    public static void main(String args[]){  
    new A().getA().msg();  
    }  
    }  