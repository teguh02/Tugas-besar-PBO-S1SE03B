package com.teguh.modul5;

import java.util.Scanner;

/**
 * Coded with love by Teguh Rijanandi
 * NIM 19104008
 * Institut Teknologi Telkom Purwokerto
 *
 * Praktikum PBO Modul 5
 */

public class main {

    public static void main(String[] args) throws Exception {

        // scan jumlah pengunjungnya
        System.out.print("Jumlah pengunjung: ");
        int scan = scanInt();

        try {

            /**
             * Jika scan lebih dari 10
             * maka akan lempar pesan error baru
             * yaitu
             * Jumlah pengunjung tidak boleh melebihi 10
             */

            if (scan <= 10) {

                // deklarasi array pengunjung
                int[] jmlPengunjung = new int[scan];

                // baca data array
                for (int i = 0; i < jmlPengunjung.length ; i++) {
                    System.out.print("Data ke-" + i + ":\t");
                    jmlPengunjung[i] = scanInt();
                }

                // print data array menggunakan while
                System.out.println("\nLihat Data Pengunjung");

                while  (true) {
                    System.out.print("Indeks :\t");
                    int scanLihatData = scanInt();

                    /**
                     * Jika permintaan index scanLihatData
                     * melebihi jumlah data array pengunjung
                     * maka tampilkan pesan error
                     */
                    if (scanLihatData > jmlPengunjung.length) {
                        throw new Exception("Index " + scanLihatData + " tidak ditemukan");
                    }

                    System.out.println("Data ke-" + scanLihatData + " " + jmlPengunjung[scanLihatData]);
                    System.out.print("Mau lihat data lagi (y/n) : ");
                    String inginLihatData = scanString();

                    /**
                     * Jika inputan ingin lihat data adalah n
                     * maka hentikan program
                     */

                    if(inginLihatData == "n" || inginLihatData == "N") {
                        break;
                    }

                }


            } else {
                throw new Exception("Jumlah pengunjung tidak boleh melebihi 10");
            }
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    /**
     * To scan integer value
     * and return integer
     * @return
     */
    public static int scanInt() {
        Scanner scan = new Scanner(System.in);
        int result = scan.nextInt();
        return (int) result;
    }

    /**
     * To scan string value
     * and return string
     * @return
     */
    public static String scanString() {
        Scanner scan = new Scanner(System.in);
        String result = scan.nextLine();
        return (String) result;
    }
}
