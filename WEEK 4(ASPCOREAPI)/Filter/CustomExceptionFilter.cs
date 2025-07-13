
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
namespace AspCoreApi.Filter
{
    public class CustomExceptionFilter : IExceptionFilter
    {
        private readonly IWebHostEnvironment _env;

        public CustomExceptionFilter(IWebHostEnvironment env)
        {
            _env = env;
        }

        public void OnException(ExceptionContext context)
        {
            string errorLog = $"Exception: {context.Exception.Message}\nStackTrace: {context.Exception.StackTrace}\nTime: {DateTime.Now}";

            string logPath = Path.Combine(_env.ContentRootPath, "Logs", "error_log.txt");
            Directory.CreateDirectory(Path.GetDirectoryName(logPath));
            File.AppendAllText(logPath, errorLog + Environment.NewLine);

            context.Result = new ObjectResult("An unexpected error occurred.")
            {
                StatusCode = StatusCodes.Status500InternalServerError
            };
        }
    }


}