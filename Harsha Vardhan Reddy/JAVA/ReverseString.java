import java.util.Scanner;

public class ReverseString {

    public static String reverseUsingPointers(String text) {
        if (text == null || text.length() <= 1) {
            return text;
        }

        char[] charArray = text.toCharArray();
        int left = 0;
        int right = charArray.length - 1;

        while (left < right) {
            // Swap characters
            char temp = charArray[left];
            charArray[left] = charArray[right];
            charArray[right] = temp;

            left++;
            right--;
        }

        return new String(charArray);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a string: ");
        String userInput = scanner.nextLine();

        String reversed = reverseUsingPointers(userInput);

        System.out.println("Original String : " + userInput);
        System.out.println("Reversed String : " + reversed);

    }
}