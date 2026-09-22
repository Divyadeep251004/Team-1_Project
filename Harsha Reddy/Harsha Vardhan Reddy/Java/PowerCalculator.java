import java.util.Scanner;

public class PowerCalculator {

    public static double calculatePower(double base, int exponent) {
        if (exponent == 0) {
            return 1.0;
        }

        double result = 1.0;
        long absExponent = Math.abs((long) exponent);
        double currentBase = base;

        while (absExponent > 0) {
    
            if (absExponent % 2 == 1) {
                result *= currentBase;
            }
            
            currentBase *= currentBase;
            absExponent /= 2;
        }

        return (exponent < 0) ? (1.0 / result) : result;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter base (a): ");
        double base = scanner.nextDouble();

        System.out.print("Enter exponent (b): ");
        int exponent = scanner.nextInt();

        double powerValue = calculatePower(base, exponent);

        System.out.println("Result: " + base + " ^ " + exponent + " = " + powerValue);

        
    }
}