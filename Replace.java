import java.util.Scanner;

public class Replace {
    public static void main(String[] args) {
        Scanner S = new Scanner(System.in);
        String Sentence = S.nextLine();
        System.out.println(Sentence);

        // Sentence.replace("Your", "My");
        System.out.println(Sentence.replaceAll("Your", "My"));

    }

}
