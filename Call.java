import java.util.Scanner;
import java.lang;

public class Call {
    static float wdays = 0.4;
    static float std = 0.25;
    static float sund = 0.15;
    static int days;
    static float length;
    static float amount;

    public static int call() {
        if (days == 1 || days == 2 || days == 3 || days == 4 || days == 5) {
            amount = length * wdays;
            System.out.printf("The Cost of your call is N %.2f%n", amount);
        } else if (days == 6) {
            amount = length * std;
            System.out.printf("The Cost of your call is N %.2f%n", amount);
        } else if (days == 7) {
            amount = length * sund;
            System.out.printf("The Cost of your call is N %.2f%n", amount);
        } else {
            System.out.printf("Invalid input");
        }
    }

    public static void main(String[] args) {

        Scanner S = new Scanner(System.in);
        System.out.println("Select the day of the weeks to determine the cost of your call: ");
        System.out.printf(
                "1. Monday %n 2. Tuesday%n 3. Wednesday%n 4. Thursday %n 5. Friday%n 6. Saturday%n 7. Sunday %n");

        days = S.nextInt();

        System.out.println("Enter the length of the call");
        length = S.nextInt();
        call();

    }
}
