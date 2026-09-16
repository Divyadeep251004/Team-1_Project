import java.util.Scanner;
public class MostFreqChar {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        char result = s.charAt(0);
        int max = 0;
        for (int i = 0; i < s.length(); i++) {
            int count = 0;
            for (int j = 0; j < s.length(); j++) {
                if (s.charAt(i) == s.charAt(j))
                    count++;
            }
            if (count > max) {
                max = count;
                result = s.charAt(i);
            }
        }
        System.out.println(result);
    }
}