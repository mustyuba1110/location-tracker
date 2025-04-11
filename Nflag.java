import java.util.Scanner;

public class Nflag {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int width, height;
        System.out.println("Enter flag Width:");
        width = scanner.nextInt();
        System.out.println("Enter flag Height:");
        height = scanner.nextInt();
        for (int i = 1; i <= height; i++) {
            for (int j = 1; j <= width; j++) {
                System.out.print("*");

            }
            for (int k = 1; k <= width; k++) {
                System.out.print("`");

            }
            for (int l = 1; l <= width; l++) {
                System.out.print("*");

            }
            System.out.println(" ");
        }
    }
}
