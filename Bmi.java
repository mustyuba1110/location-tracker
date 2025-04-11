import java.util.Scanner;

public class Bmi {
    public static void main(String[] args) {
        Scanner S = new Scanner(System.in);
        Double weight, height, bmi;
        System.out.println("Please Enter your weight (in kilogram) : ");
        weight = S.nextDouble();
        System.out.println("Please Enter your height (in meters) : ");
        height = S.nextDouble();
        bmi = weight / (Math.pow(height, 2));
        System.out.printf("Your Body Mass Index (BMI) is :" + bmi + " approximately equals %.2f%n", bmi);

    }
}