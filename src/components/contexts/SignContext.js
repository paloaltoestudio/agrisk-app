import React, {createContext, useState, useEffect} from 'react';

export const SignContext = createContext();

const SignContextProvider = (props) => {

    const [token, setToken] = useState('');
    const [session, setSession] = useState('');
    const [entriesResponse, setEntriesResponse] = useState('');
    const [chart, setChart] = useState('');
    const [isRefresh, setIsRefresh] = useState(false);
    const [isReady, setIsReady] = useState(false);

    const bookId = '01FM5IQQJ4WJJINY3VARH3E2CMYXVVFD5U';

    const refresh = (tok, ses) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${tok}`);
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        fetch(`https://pre-prod.agrisk.com.co/agriskapi/api/v1/Session/Refresh?idBook=${bookId}&sessionId=${ses}`, requestOptions)
          .then(response => response.text())
          .then(result => {
              setIsRefresh(result)
              console.log(result)
              if(!result) {
                  createSession(tok)
              }
            })
          .catch(error => {
            console.log('error', error);
        });
          
    }

    const getEntries = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch(`https://pre-prod.agrisk.com.co/agriskapi/api/v1/ModelScoring/GetOutputsModel?idBook=${bookId}&sessionId=${session}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            setEntriesResponse(result)
            console.log(result)
            setIsReady(true)
        })
        .catch(error => console.log('error', error));
    }

    const getChart = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders
        };

        fetch(`https://pre-prod.agrisk.com.co/agriskapi/api/v1/Chart/GetChart?idBook=${bookId}&sessionId=${session}&nameSheet=Gr%C3%A1ficos%20de%20salida&nameChart=grafico_1`, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log('Chart: ', result)
            setChart(result)
        })
        .catch(error => console.log('error', error));
    }

    const sendUpdate = data => {
        if(token && session){

            setIsReady(false)

            refresh(token, session);

            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);
            myHeaders.append("Content-Type", "application/json");


            var raw = JSON.stringify(data);

            var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };

            fetch(`https://pre-prod.agrisk.com.co/agriskapi/api/v1/ModelScoring/UpdateEntries?idBook=${bookId}&sessionId=${session}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                getEntries();
                getChart();
            })
            .catch(error => console.log('error', error));
        }
        
    }

    const createSession = tok => {
        var myHeaders2 = new Headers();
            myHeaders2.append("Authorization", `Bearer ${tok}`);
    
            myHeaders2.append("Content-Type", "application/json");

            var raw = '';

            var requestOptions2 = {
                method: 'PUT',
                headers: myHeaders2,
                body: raw,
                redirect: 'follow'
            };

            fetch(`https://pre-prod.agrisk.com.co/agriskapi/api/v1/Session/Create?idBook=${bookId}&persistChanges\n=false`, requestOptions2)
            .then(response => response.json())
            .then(result => {
                console.log(result.id.replace(/&/g, '%26'));
                setSession(result.id.replace(/&/g, '%26'));
                refresh(tok, result.id.replace(/&/g, '%26'));
            })
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        var myHeaders1 = new Headers();
        myHeaders1.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
        "email": "demos@agrisk.com.co",
        "password": "Demos123!"
        });
        
        var requestOptions1 = {
        method: 'POST',
        headers: myHeaders1,
        body: raw,
        redirect: 'follow'
        };
        
        fetch("https://pre-prod.agrisk.com.co/agriskapi/api/v1/Auth/SignIn", requestOptions1)
        .then(response => response.json())
        .then(result => 
            {
                console.log(result.access_token);
                setToken(result.access_token)

                createSession(result.access_token)
            })
        .catch(error => console.log('error', error));
        
    }, [])

    console.log('is refesh', isRefresh)

    return(
        <SignContext.Provider value={{token, session, entriesResponse, chart, isReady, createSession, sendUpdate, getEntries}}>
            { props.children }
        </SignContext.Provider>
    )
}

export default SignContextProvider;
