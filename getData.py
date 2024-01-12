# Press the green button in the gutter to run the script.
if __name__ == '__main__':

    import saveData

    import requests
    from bs4 import BeautifulSoup

    # The URL of the site you want to crawl
    url = 'https://fastlane.co.il/'

    # Send a GET request to the site
    response = requests.get(url, verify=False)

    # Check if the request was successful
    if response.status_code == 200:
        # Parse the content of the request with BeautifulSoup
        soup = BeautifulSoup(response.text, 'html.parser')
        price = soup.find('span',{'id' : 'lblPrice'}).text
        print(price)

        saveData.some_function(price)


    else:
        print(f"Failed to retrieve the website. Status code: {response.status_code}")


