import javax.swing.*;
import java.awt.*;

public class Homework {

    public static void main(String[] args) {
        JFrame frm = new JFrame("Reg Number");
        frm.setDefaultCloseOperation(frm.EXIT_ON_CLOSE);
        frm.setLayout(null);
        frm.setBackground(Color.green);
        frm.setForeground(Color.BLUE);
        frm.setBounds(400, 40, 500, 500);
        frm.setLayout(new FlowLayout(FlowLayout.RIGHT));
        JButton btn = new JButton("AddText");
        JTextField jtext = new JTextField(20);
        btn.addActionListener(new ActionListener() {
            String name = "";

            @Override
            public void actionPerformed(ActiveEvent e) {
                name += "Mustapha";
            }
        });
        frm.setVisible(true);

    }
}