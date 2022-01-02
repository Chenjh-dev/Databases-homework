package work.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
public class DealError implements ErrorController {

    @RequestMapping("/error")
    @ResponseBody
    public void handleError(HttpServletResponse response,Exception e) throws IOException {
        response.sendRedirect("/ServerBusy");
    }

    @Override
    @RequestMapping("/ServerBusy")
    public String getErrorPath() {
        return "errorPage";
    }

}


