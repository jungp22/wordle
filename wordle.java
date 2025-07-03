import java.util.Scanner;

public class wordle {
    public static void main(String[] args) {

        String correctWord = "test";
        String userInput = "";
        Scanner scn = new Scanner(System.in);
        while (userInput!= "asdfasdfasdf") {
            System.out.println("Enter your input: ");
            userInput = scn.nextLine();
            System.out.println(userInput);
            for (int x = 0; x < correctWord.length(); x++) {
                for (int y = 0; y < userInput.length(); y++) {
                    if(correctWord.charAt(x) == userInput.charAt(y) && x ==y){
                        System.out.println("correct");
                    }
                }
            }
        }
        scn.close();
    }
}
