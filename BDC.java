import java.util.Scanner;

public class BDC {
    public static void main(String[] args) {
        Scanner S = new Scanner(System.in);
        Scanner M = new Scanner(System.in);
        int USD = 810;
        int EUR = 890;
        int GBF = 1100;
        int JPY = 4070;
        int SAR = 109;
        Double Naira;
        Double N_to_USD, N_to_EUR, N_to_GBF, N_to_JPY, N_to_SAR;
        System.out.println("Please Select Currency to Convert to Nigerian Naira: ");
        System.out.printf("1 USD%n 2 EUR%n 3 GBF%n 4 JPY%n 5 SAR%n");
        int Menu = M.nextInt();
        switch (Menu) {
            case 1:
                System.out.println("Please Amount in USD: ");
                Naira = S.nextDouble();
                N_to_USD = USD * Naira;
                System.out.print("$" + Naira + " Exchanged at the rate of :");
                System.out.println(N_to_USD + " Naira");
                break;
            case 2:
                System.out.println("Please Amount in EUR: ");
                Naira = S.nextDouble();
                N_to_EUR = EUR * Naira;
                System.out.println("\u00A3" + Naira + " Exchanged at the rate of :");
                System.out.println(N_to_EUR + " Naira");
                break;
            case 3:
                System.out.println("Please Amount in GBF: ");
                Naira = S.nextDouble();
                N_to_GBF = GBF * Naira;
                System.out.println("" + Naira + " Exchanged at the rate of :");
                System.out.println(N_to_GBF + " Naira");
                break;
            case 4:
                System.out.println("Please Amount in JPY: ");
                Naira = S.nextDouble();
                N_to_JPY = JPY * Naira;
                System.out.println("" + Naira + " Exchanged at the rate of :");
                System.out.println(N_to_JPY + " Naira");
                break;
            case 5:
                System.out.println("Please Amount in SAR: ");
                Naira = S.nextDouble();
                N_to_SAR = SAR * Naira;
                System.out.println("" + Naira + " Exchanged at the rate of :");
                System.out.println(N_to_SAR + " Naira");
                break;

            default:
                System.out.println("Invalid Input");
                break;
        }
    }
}