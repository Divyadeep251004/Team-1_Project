
import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

class Buffer {
    private final Queue<Integer> queue = new LinkedList<>();
    private final int capacity;

    public Buffer(int capacity) {
        this.capacity = capacity;
    }
    public synchronized void produce(int item) throws InterruptedException {
        while (queue.size() == capacity) {
            System.out.println("[Queue Full] Producer is waiting...");
            wait();
        }

        queue.add(item);
        System.out.println("Produced item: " + item + " | Queue count: " + queue.size());
        notify();
    }
    public synchronized int consume() throws InterruptedException {
        while (queue.isEmpty()) {
            System.out.println("[Queue Empty] Consumer is waiting...");
            wait();
        }

        int item = queue.poll();
        System.out.println("Consumed item: " + item + " | Queue count: " + queue.size());

        notify();
        return item;
    }
}

public class ProducerConsumerDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter buffer capacity: ");
        int capacity = scanner.nextInt();

        System.out.print("Enter total items to produce and consume: ");
        int totalItems = scanner.nextInt();

        Buffer buffer = new Buffer(capacity);

        Thread producerThread = new Thread(() -> {
            try {
                for (int i = 1; i <= totalItems; i++) {
                    buffer.produce(i);
                    Thread.sleep(400); 
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        });

        // Consumer Thread
        Thread consumerThread = new Thread(() -> {
            try {
                for (int i = 1; i <= totalItems; i++) {
                    buffer.consume();
                    Thread.sleep(700); // simulate processing latency
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        });

        producerThread.start();
        consumerThread.start();

        try {
            producerThread.join();
            consumerThread.join();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }

        System.out.println("\nAll items produced and consumed successfully.");
       
    }
}