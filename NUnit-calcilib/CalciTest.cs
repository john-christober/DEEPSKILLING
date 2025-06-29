using NUnit.Framework;

using CalcLibrary;

namespace CalcLibrary.Tests
{
    [TestFixture]
    public class CalculatorTests
    {
        private SimpleCalculator calc;

        [SetUp]
        public void SetUp()
        {
            calc = new SimpleCalculator();
        }

        [TearDown]
        public void TearDown()
        {
            // Optional cleanup
        }

        [TestCase(2, 3, 5)]
        [TestCase(-1, -1, -2)]
        [TestCase(0, 0, 0)]
        public void Add_WhenCalled_ReturnsCorrectSum(int a, int b, int expectedResult)
        {
            double result = calc.Addition( a, b);
            Assert.That(result, Is.EqualTo(expectedResult));
        }
    }
}
