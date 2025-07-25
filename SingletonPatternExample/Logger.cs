using System;

public class Logger
{ 
    private static Logger ? instance;
    private static readonly object lockObj = new object();
    private Logger()
    {
        Console.WriteLine("Logger Initialized");
    }
    public static Logger GetInstance()
    {
        if (instance == null)
        {
            lock (lockObj)
            {
                if (instance == null)
                {
                    instance = new Logger();
                }
            }
        }
        return instance;
    }

    // Method to simulate logging
    public void Log(string message)
    {
        Console.WriteLine("Log: " + message);
    }
}
