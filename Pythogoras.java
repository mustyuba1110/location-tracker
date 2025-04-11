import java.util.Scanner;

public class Pythogoras {
    public static void main(String[] args) {
        Double length, breadth, hypotenus, result;
        Scanner S = new Scanner(System.in);
        System.out.println("Select the value you want to find: ");
        System.out.printf("1. Find Hypotenus%n 2. Length%n 3. Breadth%n");
        int Menu = S.nextInt();
        switch (Menu) {
            case 1:
                System.out.println("Enter the Length : ");
                length = S.nextDouble();
                System.out.println("Enter Breadth: ");
                breadth = S.nextDouble();
                result = Math.sqrt(Math.pow(length, 2) + Math.pow(breadth, 2));
                System.out.printf("The Hypotenus between length %.2f cm and %.2f cm is %.2f", length, breadth, result);
                break;
            case 2:
                System.out.println("Enter the Hypotenus : ");
                hypotenus = S.nextDouble();
                System.out.println("Enter Breadth: ");
                breadth = S.nextDouble();
                if (hypotenus < breadth) {
                    System.out.println("Breadth must less than hypotenus");
                } else {
                    result = Math.sqrt(Math.pow(hypotenus, 2) - Math.pow(breadth, 2));
                    System.out.printf("The length between hypotenus %.2f cm and breadth %.2f cm is %.2f", hypotenus,
                            breadth, result);
                }

                break;
            case 3:
                System.out.println("Enter the Hypotenus : ");
                hypotenus = S.nextDouble();
                System.out.println("Enter length: ");
                length = S.nextDouble();
                if (hypotenus < length) {
                    System.out.println("Length must less than hypotenus");
                } else {
                    result = Math.sqrt(Math.pow(hypotenus, 2) - Math.pow(length, 2));
                    System.out.printf("The breadth between hypotenus %.2f cm and length %.2f cm is %.2f", hypotenus,
                            length,
                            result);
                }
                break;
            default:
                System.out.println("Invalid Option");
                break;
        }

    }

}
