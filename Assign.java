import javax.swing.*;
import java.awt.*;

public class Assign {

    public static void main(String[] args) {
        JFrame frm = new JFrame("Reg Number");
        frm.setDefaultCloseOperation(frm.EXIT_ON_CLOSE);
        frm.setLayout(null);
        frm.setBackground(Color.GREEN);
        frm.setForeground(Color.BLUE);
        frm.setBounds(500, 40, 500, 500);

        JPanel headJPanel = new JPanel();
        headJPanel.setBounds(600, 250, 400, 250);

        headJPanel.setBackground(Color.CYAN);

        JButton A = new JButton("CLEAR");
        A.setBounds(10, 240, 250, 50);
        JButton B = new JButton("INSERT");
        B.setBounds(10, 240, 250, 50);
        JButton C = new JButton("SPACE");
        C.setBounds(10, 240, 250, 50);
        JButton D = new JButton("UPDATE");
        D.setBounds(10, 240, 250, 50);
        JButton E = new JButton("REMOVE");
        E.setBounds(10, 240, 250, 50);
        JButton F = new JButton("A");
        F.setBounds(10, 210, 250, 50);
        JButton G = new JButton("B");
        G.setBounds(10, 240, 250, 50);
        JButton H = new JButton("C");
        H.setBounds(10, 240, 250, 50);
        JButton I = new JButton("D");
        I.setBounds(10, 240, 250, 50);
        JPanel jpn = new JPanel();
        jpn.setBounds(500, 280, 500, 450);

        jpn.add(A);
        jpn.add(B);
        jpn.add(C);
        jpn.add(D);
        jpn.add(E);
        jpn.add(F);
        jpn.add(G);
        jpn.add(H);
        jpn.add(I);
        frm.add(jpn);
        frm.add(headJPanel);
        frm.setVisible(true);
    }
}