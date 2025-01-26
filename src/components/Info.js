import React from "react";
import styled from "styled-components";

const InfoContainer = styled.div`
  padding: 20px;
  font-family: 'Arial, sans-serif';
  color: #333;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

const TextContent = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 15px;
  text-align: left;
`;

const Info = () => {
  return (
    <InfoContainer>
      {/* Introduction Section */}
      <SectionTitle>Welcome to Instapot Recipes</SectionTitle>
      <TextContent>
        This app is designed to make cooking with your Instant Pot easier and faster. Find recipes across various categories like beef, chicken, seafood, desserts, snacks, and more. Use the search bar to find ingredients or recipe names. Enjoy cooking with less hassle!
      </TextContent>

      {/* How to use the app */}
      <SectionTitle>How to Use the App</SectionTitle>
      <TextContent>
        <strong>Search for Recipes:</strong> Use the search bar to find recipes by name or ingredients. Type in the recipe name you're looking for or the ingredients you have at hand. The app will filter the recipes based on your search.
      </TextContent>
      <TextContent>
        <strong>Filter by Category:</strong> You can filter recipes by categories such as Beef, Chicken, Seafood, Pork, Desserts, Snacks, and Bakery. This allows you to quickly find the recipes you're interested in.
      </TextContent>

      {/* Timer Section */}
      <SectionTitle>Cooking Timer</SectionTitle>
      <TextContent>
        <strong>Using the Cooking Timer:</strong> The app includes a timer to help you keep track of your cooking times. Set the time based on your recipe or adjust it manually. Never forget to stop the cooking time again!
      </TextContent>
      <TextContent>
        <strong>Time Alert:</strong> When the timer reaches zero, an alert will notify you that the cooking time is up. Follow the recipe without worrying about timing!
      </TextContent>

      {/* Cooking Tips */}
      <SectionTitle>Cooking Tips</SectionTitle>
      <TextContent>
        <strong>Tips to Get the Most Out of Your Instant Pot:</strong> 
        <ul>
          <li>Prepare all ingredients before starting to save time during cooking.</li>
          <li>Use the high-pressure mode for foods that need to cook quickly.</li>
          <li>Don’t overfill your Instant Pot. Always follow recipe recommendations to prevent spills or undercooking.</li>
        </ul>
      </TextContent>
      <TextContent>
        Some recipes might need personalized adjustments. If you don’t have one of the ingredients or the suggested cook time, feel free to experiment and adjust the taste to your liking.
      </TextContent>

      {/* Dark Mode Section */}
      <SectionTitle>Dark Mode</SectionTitle>
      <TextContent>
        <strong>Dark Mode:</strong> If you prefer a more relaxed visual experience, you can enable dark mode. To toggle between light and dark mode, simply click the button in the top-right corner. Perfect for late-night cooks!
      </TextContent>

      {/* Help Section */}
      <SectionTitle>Need Help?</SectionTitle>
      <TextContent>
        If you need further assistance or have any questions, feel free to contact us through our email or social media. We’re here to make sure you enjoy your experience with the app to the fullest.
      </TextContent>
    </InfoContainer>
  );
};

export default Info;
