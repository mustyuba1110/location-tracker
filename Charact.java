import java.util.Scanner;

public class Charact {
    public static void main(String[] args) {
        Scanner S = new Scanner(System.in);
        System.out.println("Enter a word: ");
        char input = S.next().charAt(0);

        if ((char) input >= 65 && (char) input <= 90) {
            System.out.println("The word you entered Begins Capital Letter");
        } else if ((char) input >= 97 && (char) input <= 122) {
            System.out.println("The word you entered Begins Small Letter");
        } else if ((char) input >= 48 && (char) input <= 57) {
            System.out.println("The word you entered Begins a number");
        }
    }
}