import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {

    const jsonResponse = {
        "GleamData": {
            "Scenario": "GleamData",
            "GleamText": "TESTING SEARCH",
            "LightGleamFormat": "svg",
            "LightGleamThumbnailId": "ODSWG.d3e8392d-0cf1-47d2-a813-92de02b91547",
            "LightGleamBlob": "",
            "DarkGleamFormat": "svg",
            "DarkGleamThumbnailId": "ODSWG.094db42b-d086-4ac6-aceb-e59a16d701e5",
            "DarkGleamBlob": "",
            "TargetSurface": "1",
            "GleamSize": "1",
            "GleamFormat": "svg",
            "LightGleamUrl": "https://th.bing.com/th?id=ODSWG.d3e8392d-0cf1-47d2-a813-92de02b91547&pid=dsb",
            "DarkGleamUrl": "https://th.bing.com/th?id=ODSWG.094db42b-d086-4ac6-aceb-e59a16d701e5&pid=dsb"
        },
        "Scenarios": [
            {
                "Scenario": "KC_HeroCard",
                "Title": "15 timeless holiday specials",
                "ClickThroughUrl": "https://www.msn.com/en-us/lifestyle/travel/classic-holiday-tv-15-timeless-christmas-specials-to-enjoy/ss-AA1jOLCQ",
                "ThumbnailId": "ODSWG.35f09ead-a5c0-48aa-b2dc-61e9004bbb57",
                "Cta": false,
                "WholePageTabsData": [
                    {
                        "TabName": "Tab1",
                        "ClickThroughUrl": "https://www.example.com/tab1"
                    },
                    {
                        "TabName": "Tab2",
                        "ClickThroughUrl": "https://www.example.com/tab2"
                    }
                ],
                "UXTemplateName": "ImageSimpleCTA",
                "Ocid": "winpsearchbox1",
                "Cta": true,
                "FormCode": "123",
                "Items": [
                    {
                        "Query": "bowl selection 2023"
                    },
                    // Add more items as needed
                ]
            },
            // Add more scenarios as needed
        ],
        "ImageHostName": "https://th.bing.com",
        "ImpressionGuid": "C086657FA2BD4729A6203D38CC3488DA"
    };

    return new Response(JSON.stringify(jsonResponse), {
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    });
};
