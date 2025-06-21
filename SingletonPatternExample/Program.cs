﻿using System;

class Program
{
    static void Main(string[] args)
    {
        Logger logger1 = Logger.GetInstance();
        logger1.Log("First message");

        Logger logger2 = Logger.GetInstance();
        logger2.Log("Second message");

        if (logger1 == logger2)
        {
            Console.WriteLine("Both instances are the same (Singleton works!)");
        }
        else
        {
            Console.WriteLine("Instances are different (Singleton failed!)");
        }
    }
}
