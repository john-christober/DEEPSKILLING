using System;

class FinancialForecast
{
    
    public static double PredictFutureValue(double presentValue, double growthRate, int years)
    {
        if (years == 0)
            return presentValue;

        return PredictFutureValue(presentValue * (1 + growthRate), growthRate, years - 1);
    }

    static void Main()
    {
        double presentValue = 1000;    
        double growthRate = 0.75;      
        int years = 10;                 
        double futureValue = PredictFutureValue(presentValue, growthRate, years);
        Console.WriteLine($"Predicted Future Value after {years} years: {futureValue:C}");
    }
}
