import java.util.Scanner;

public class Average {
    public static void main(String[] args) {
        Scanner S = new Scanner(System.in);
        int fn, sn, tn;
        Double average;
        System.out.println("Please Enter the first number: ");
        fn = S.nextInt();
        System.out.println("Please Enter the second number : ");
        sn = S.nextInt();
        System.out.println("Please Enter the third number : ");
        tn = S.nextInt();
        double sum = fn + sn + tn;
        average = sum / 3;
        System.out.println("The average of " + fn + "," + sn + "," + tn + " is " + average);

    }
}