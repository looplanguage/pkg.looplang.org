class Http{
    public static async Request(url:string, body:any, method= "GET"):Promise<any> {
        const formData = new FormData()

        switch (method.toUpperCase()){
            case "GET":
                url += '?' + Object.keys(body).map(key => key + '=' + body[key]).join('&')
                body = null
                break;
            case "POST":
                Object.keys(body).forEach(key => formData.append(key, body[key].toString()))
                body = formData
                break;
        }

        return await fetch(url,{
            body: body,
            method: method,
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'omit',
            redirect: 'follow',
            referrerPolicy: 'no-referrer', //
        })
    }
}

export default Http