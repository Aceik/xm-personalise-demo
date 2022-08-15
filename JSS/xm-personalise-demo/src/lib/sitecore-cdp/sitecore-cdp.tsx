import axios from 'axios';

// export function GetBrowserId<CreateBrowserRefResponse>() {
//     // if(window?.Boxever && window?.Boxever?.getID()) {
//     //     const promise = axios.get<CreateBrowserRefResponse>(boxeverAPIEndpoint);

//     //     const dataPromise = promise.then((response) => response.data);

//     //     const promise = window?.Boxever?.getID();
//     //     return promise.data;
//     // }

//     const clientKey = process.env.SITECORE_BOXEVER_CLIENTKEY;
//     const boxeverAPIEndpoint = `https://api-ap-southeast-2-production.boxever.com/v1.2/browser/create.json?client_key=${clientKey}&message={}`;

//     const promise = axios.get<CreateBrowserRefResponse>(boxeverAPIEndpoint);

//     const dataPromise = promise.then((response) => response.data);

//     return dataPromise;
// }

export function GetBrowserId<CreateBrowserRefResponse>() {
    if (window?.Boxever && window?.Boxever?.getID()) {
        return window.Boxever.getID();
    }

    const clientKey = process.env.SITECORE_BOXEVER_CLIENTKEY;
    const boxeverAPIEndpoint = `https://api-ap-southeast-2-production.boxever.com/v1.2/browser/create.json?client_key=${clientKey}&message={}`;

    axios.get<CreateBrowserRefResponse>(boxeverAPIEndpoint);
    return window.Boxever.getID();
}

export function PushViewEvent(event: ViewEvent) {
    //get the browser ID seperately and insert into the page view event object to use for our requests
    const browserID = GetBrowserId<CreateBrowserRefResponse>();

    event.browser_id = browserID;
    console.log('CDP browserId: ', browserID);

    const message = JSON.stringify(event);
    const clientKey = process.env.SITECORE_BOXEVER_CLIENTKEY;

    const boxeverAPIEndpoint = `https://api-ap-southeast-2-production.boxever.com/v1.2/event/create.json?client_key=${clientKey}&message=${message}`;

    axios
        .get(boxeverAPIEndpoint)
        .then(function (response) {
            // handle success
            console.log('boxever view event response was: ', response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}

export function PushIdentifyEvent(event: IdentifyEvent) {
    //get the browser ID seperately and insert into the page view event object to use for our requests
    const browserID = GetBrowserId<CreateBrowserRefResponse>();

    event.browser_id = browserID;
    console.log('CDP browserId: ', browserID);

    const message = JSON.stringify(event);
    const clientKey = process.env.SITECORE_BOXEVER_CLIENTKEY;

    console.log('event data: ', event);

    const boxeverAPIEndpoint = `https://api-ap-southeast-2-production.boxever.com/v1.2/event/create.json?client_key=${clientKey}&message=${message}`;

    axios
        .get(boxeverAPIEndpoint)
        .then(function (response) {
            // handle success
            console.log('boxever identify event response was: ', response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}

export type CreateBrowserRefResponse = {
    status: string;
    version: string;
    client_key: string;
    ref: string;
    customer_ref: string;
};

export type ViewEvent = {
    channel?: string;
    type?: string;
    language?: string;
    currency?: string;
    page?: string;
    pos?: string;
    browser_id?: string;
};

//see: https://doc.sitecore.com/cdp/en/developers/sitecore-customer-data-platform--data-model-2-1/send-an-identity-event-to-sitecore-cdp.html
export type IdentifyEvent = ViewEvent & {
    firstname?: string;
    lastname?: string;
    email?: string;
    identifiers: [
        {
            provider: string;
            id: string;
        }
    ];
};
