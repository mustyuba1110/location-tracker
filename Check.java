import java.util.Scanner;

public class Check {
    public static void main(String[] args) {
        Scanner S = new Scanner(System.in);
        String word1 = S.nextLine();
        String word2 = S.nextLine();

        if (word1.length() > word2.length()) {
            System.out.println(word1);
            System.out.println(word2);
        } else if (word2.length() > word1.length()) {
            System.out.println(word2);
            System.out.println(word1);
        } else if (word1.length() == word2.length()) {

            System.out.println(word1 + " " + word2);
        }
        System.out.printf("Word1 length  is %s%n Word2 length is %s", word1.length(), word2.length());
    }

}
