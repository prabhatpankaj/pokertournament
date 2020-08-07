package com.pilon.pokertournament.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class TestInterceptor extends HandlerInterceptorAdapter {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        // log.info("TestInterceptor.preHandle: {}", request.getRequestURL());
        // Cookie[] cookies =  request.getCookies();
        // if (cookies != null) {
        //     Arrays.stream(cookies).forEach(cookie -> {
        //         log.info("{}: {}", cookie.getName(), cookie.getValue());
        //     });
        // }
        return super.preHandle(request, response, handler);
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
            ModelAndView modelAndView) throws Exception {
        // log.info("TestInterceptor.postHandle: {}", request.getRequestURL());
        super.postHandle(request, response, handler, modelAndView);
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
            throws Exception {
        // log.info("TestInterceptor.postHandle: {}", response.toString());
        // Cookie[] cookies =  request.getCookies();
        // if (cookies != null) {
        //     Arrays.stream(cookies).forEach(cookie -> {
        //         log.info("{}: {}", cookie.getName(), cookie.getValue());
        //     });
        // }
        super.afterCompletion(request, response, handler, ex);
    }

    @Override
    public void afterConcurrentHandlingStarted(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        log.info("TestInterceptor.afterConcurrentHandlingStarted");
       super.afterConcurrentHandlingStarted(request, response, handler);
    }

}