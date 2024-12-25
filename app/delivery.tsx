
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { useCart } from "./cartcontext"; 
import DrawerComponent from "../components/Drawer";

const { height: windowHeight } = Dimensions.get("window");

const PickScreen = () => {
  const router = useRouter();
  const { addToCart } = useCart();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Pick-Up Deals");
  const scrollRef = useRef(null);

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

  const handleAddToCart = (deal) => {
    addToCart(deal);
    router.push("/cart");
  };

  const handleScroll = (event) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    const sectionHeights = sectionPositions.current;

    if (scrollY < sectionHeights[1]) {
      setActiveTab("Pick-Up Deals");
    } else if (scrollY >= sectionHeights[1] && scrollY < sectionHeights[2]) {
      setActiveTab("NY 212 Specials");
    } else {
      setActiveTab("4 Way Deals");
    }
  };

  const scrollToSection = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        y: sectionPositions.current[index],
        animated: true,
      });
    }
  };

  const sections = [
    {
      id: "1",
      title: "Pick-Up Deals",
      deals: [
        { id: "1", tag: "Best Seller", title: "Super Saver", description: "1x Medium Pizza 🍕", price: "Rs. 699.00", originalPrice: "Rs. 1,264.00", discount: "45% Off", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7gwyVp6myLmipg7C4UCZIV_LmmeKfMKryOQ&s" },
        { id: "2", tag: "New", title: "Super Saver 2", description: "2x Medium Pizzas + 1.5L Drink", price: "Rs. 1,799.00", originalPrice: "Rs. 3,300.00", discount: "45% Off", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuKGYbl4k6RC0JCx1R1ZeTxQVPgVahTu5M3w&s" },
        { id: "3", tag: "Popular", title: "Pizza Blast", description: "2x Large Pizzas", price: "Rs. 2,199.00", originalPrice: "Rs. 3,500.00", discount: "37% Off", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7gwyVp6myLmipg7C4UCZIV_LmmeKfMKryOQ&s" },
        { id: "4", tag: "Combo", title: "Weekend Feast", description: "1x Large Pizza + 2 Sides", price: "Rs. 1,599.00", originalPrice: "Rs. 2,800.00", discount: "43% Off", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuKGYbl4k6RC0JCx1R1ZeTxQVPgVahTu5M3w&s" },
        { id: "5", tag: "Value", title: "Lunch Combo", description: "1x Small Pizza + Drink", price: "Rs. 499.00", originalPrice: "Rs. 800.00", discount: "38% Off", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRvAikqGmSQsJ7s-L-rq9ExiVFah_EJ3TQGQ&s" },
      ],
    },
    {
      id: "2",
      title: "NY 212 Specials",
      deals: [
        { id: "6", tag: "Exclusive", title: "NY Express", description: "4x Small Pizzas 🍕 + 2 Drinks", price: "Rs. 2,499.00", originalPrice: "Rs. 4,000.00", discount: "38% Off", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuKGYbl4k6RC0JCx1R1ZeTxQVPgVahTu5M3w&s" },
        { id: "7", tag: "Special", title: "Meat Lovers", description: "2x Large Meat Pizzas", price: "Rs. 3,999.00", originalPrice: "Rs. 6,000.00", discount: "33% Off", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7gwyVp6myLmipg7C4UCZIV_LmmeKfMKryOQ&s" },
        { id: "8", tag: "Combo", title: "Pepperoni Feast", description: "3x Medium Pizzas + Drinks", price: "Rs. 3,000.00", originalPrice: "Rs. 5,500.00", discount: "45% Off", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuKGYbl4k6RC0JCx1R1ZeTxQVPgVahTu5M3w&s" },
        { id: "9", tag: "Classic", title: "NY Classic Combo", description: "1x Medium Pizza + Garlic Bread", price: "Rs. 1,299.00", originalPrice: "Rs. 2,300.00", discount: "40% Off", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRvAikqGmSQsJ7s-L-rq9ExiVFah_EJ3TQGQ&s" },
        { id: "10", tag: "Hot Deal", title: "Cheese Burst", description: "1x Large Cheese Pizza", price: "Rs. 1,899.00", originalPrice: "Rs. 3,000.00", discount: "37% Off", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7gwyVp6myLmipg7C4UCZIV_LmmeKfMKryOQ&s" },
      ],
    },
    {
      id: "3",
      title: "4 Way Deals",
      deals: [
        { id: "11", tag: "Combo", title: "Family Feast", description: "2x Large Pizzas 🍕 + 4 Drinks", price: "Rs. 3,999.00", originalPrice: "Rs. 6,000.00", discount: "33% Off", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRvAikqGmSQsJ7s-L-rq9ExiVFah_EJ3TQGQ&s" },
        { id: "12", tag: "Budget", title: "Party Combo", description: "4x Medium Pizzas", price: "Rs. 5,499.00", originalPrice: "Rs. 9,000.00", discount: "40% Off", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7gwyVp6myLmipg7C4UCZIV_LmmeKfMKryOQ&s" },
        { id: "13", tag: "Exclusive", title: "Vegan Delight", description: "3x Medium Veg Pizzas", price: "Rs. 3,000.00", originalPrice: "Rs. 4,500.00", discount: "33% Off", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuKGYbl4k6RC0JCx1R1ZeTxQVPgVahTu5M3w&s" },
        { id: "14", tag: "Limited", title: "Weekend Treat", description: "2x Large Pizzas + Desserts", price: "Rs. 4,299.00", originalPrice: "Rs. 7,000.00", discount: "39% Off", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRvAikqGmSQsJ7s-L-rq9ExiVFah_EJ3TQGQ&s" },
        { id: "15", tag: "Favorite", title: "Pizza & Wings", description: "1x Medium Pizza + Wings", price: "Rs. 1,999.00", originalPrice: "Rs. 3,000.00", discount: "33% Off", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7gwyVp6myLmipg7C4UCZIV_LmmeKfMKryOQ&s" },
      ],
    },
  ];

  
  const sectionPositions = useRef([]);

  const onLayout = (event, index) => {
    const { y } = event.nativeEvent.layout;
    sectionPositions.current[index] = y;
  };

  const toggleSearch = () => {
    router.push("/search"); 
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleDrawer}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.deliverText}>Delivery-At ▼</Text>
          <Text style={styles.locationText}>Dream Garden</Text>
        </View>
        <TouchableOpacity onPress={toggleSearch}>
          <Text style={styles.searchIcon}>🔍</Text>
        </TouchableOpacity>
      </View>

      
      <Image
        source={{
          uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhIWFRUXGB0WGRcVGRgYGBgXHRoaGhcYGhgYHyggGh0lHRgXITEhJSkrLy4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0lICYtLTUtLS0vLS0tMC8tLS8tLy0vLS0tLS8tLS8tNS8tLS0tLS0tLS8tLS8tLS0tLy0tLf/AABEIAIoBbAMBEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBQYEBwj/xABBEAACAQIDBAcFBQcDBQEBAAABAhEAAxIhMQQFQVEGEyJhcYGRMqGxwfAUQlLR4SNTYoKSovEWM3IHJLLC0oMV/8QAGwEAAQUBAQAAAAAAAAAAAAAAAAECAwQFBgf/xABAEQABAwIDBAgFAgUCBQUAAAABAAIRAyEEEjEFQVHwEyJhcYGRobEUMsHR4RVSBiMzQvEWUyRDYnKiNIKSssL/2gAMAwEAAhEDEQA/APOKEJ6iO6KEJzt9cqEKKhCKEIoQihCKEIoQlQwaEJ7PwFCFHQhFCEUIRQhFCEChClURQhRsaEJKEIoQihCdbQsQAJJyFNc4NBcdAn06bqjwxgknRXGzbLjuLrgSQpGnZifMkn0rMqV+jpkj5nQT4/YLpcPgfiK7Qb02SBwOWAf/AJEnyWlLAiRAxEzPDTId36Vma6LpIgwdyRkjLL1H50pEJAZumZRmRn5/Cm7k+5KdhjQTw8vCiETOtkqHWYAGRIHwGWdKEh7FFdvTA4DTifWml0qRrAL71HTU9FCEoFLCaSlOVCTVNpE6FM/sL5+v+I9KcflCYPnPghT2R4/CPzpRokPzJ6CBP13n5UoTXGTCjxE5xx45e+RNNklPgCyCTx04cvWi+9FtyBxmfrupU0ngnRn9RPChJeFGZ4/pSXTxA0RPL1+tKO5LHFFto4xPHWKAUOEpShJJUZUROiTMGiCsQqTXVLy9Pdo+tKEKXduzrcuqrkhTJZgQIABJMnLKhCN6bOLd10UyFYga5QSIPMjSRIy1oQuWhCKEIoQu2xujaHUMtlyDoclnj94jhnVd2LotMFw57lM3D1XCQ0q+2HoS7LN24EJ0VRMeJOvlpGprPq7XaHQxsjtV2ns0kS8wuqx0HUGbl0uOSgJllqST36cqiftdxENbHr9lI3ZrQesZ9Eu09B0P+1eK8wwDjyIII85pGbXePnbPolfs1h+V0eq5dt6EOBNq5iI4OMM+BGh7jz1qaltdpPXbA7FFU2aQOofNUF/c+0ICWsuANTkY/pJrQbi6DjAcFSdh6rRJaVxVYUKKELv3Zs1tg7XceEFVGD2i7YiqieYRuHLTWhChfZ2XNlZeElSM4BjPjBGXfQhQO1CE2hCKEIoQhBJgZnkMz6UIXTu5CzMEPaCEiDnOQ8siar4mo1gbm0kLQ2dQqVXv6P5gx0eg9QSFod1BurBfUy3qZrExZb0pDNBbyXZbJFX4VrqvzGT5mefJd1u5HeOXzHfVcGFfc2VOqYoIMgmORHPKfzp4E6KInLY88+C7upUt1eFQJKxHbEAQxM+fyGtTZROWPuq2dwbnk7u7u+n1XXsm47T2rTtc6sk4WJgyzNhA1AWMJy1h1JqRmHY5gMwoKuOqsqvYG5gLjuAnhefoYUe8t22bbopvYjjwsgK9gAkMGIPZIIzJ4HuMNqUmNcAXb9E7D4mtUY5wZFpBvfeItdTbXufZT2re0oikYgCwYxIJHacGQrRHNCDTn0KJu1wA57eYTKWNxTeq+mSe4jjwB3ie4ghV+892WrSlk2lbpxYQFwzxliA5gQMjUNSixgkOnnvVrD4qrVdldTLbTefLQXVWFqCFdJTifH650qaAmU1SIoQpLuQUd0+ufwinHQBRsuSebJz5KB3fE/oKDokF3FNQ5RwGcd+nz91ASuF5SM3PWkSgIBj50oSESnM3AUpKQCblNekKc2yXCTnrRBN0S0WRbeNZ1nLjQChzZ0S2TmfD5igJHiw53KVGjh76cDCjcJ3rAg11C8zSUIWj2XdVi5smMFkYRcuO2FwqhjbAABVgrtjIEMZtkcFkQq3Zv21g2/v2Q1y332/avW/5f90f/rzFCFXUIU+wbG164ttPabnoBxJ7h+VRVqzaTC9ykpU3VHBrVt9h6H2bZDXGa4Rn2gAgI4lRw8Sawqu06tQZWiB2a+a16eApsMm/stIlq9cE2rYjg1w4Q3hq3nEGqQpAfMfJTurjQLj/AP5O3XDDFLCzwONtJyiR/wCNTjoG9vPPFSF9MauJ7rep+gXVs2ybKspcvPccMQzuzrnyGHs5H551G6pe0DyVR9UF1reaZvfd1oovUO2NnwgrcLg5EwxZoAgT4wM6modYnNEATp7JWVg0y4ZvGPVVdm1tlu2Lqjr7bcva5HJRzBEgHSn1aVLOWGxHO9W6TqVQS10dh+6TZukCEkXFK8CdQDpByBHmKhfhDq0ypXUqjRJEjs5BXLvDonYukvaYoT+GCsnjhPkciONT0dpVaYyvv36rOqYGlUOZtu5YreWxPYuNbfUZgjRl4MO7I+YI4Vu0KzazA9qyKtJ1J5a5WAsAIqswW3b7dxtQbrgHq1AIxMECLhBEHGSQDNSqNT7bt1y8LZ2gC3Y1iFBck+3aQ9qIInD2eyTxihCpNqCYz1eLBwxxi8475oQoqEIoQvSP+nv/AE8+0Bdo2pf2ZzVDIkcC2hM8BMRmZ9mhC9d2DdNmyoW3bVQOAAA4cBkNBoKEJu1blsXBD2ww5HMH10PeIOWtNcxrhDhKkpVqlJ2am4g9i836YdF/spx2yTaJ0OqcgTxEmJ8J1E4eLwnRHM3T2XbbK2r8UMj7OHkfsezyWZqitpPtvGRzB+gR30oKa5s3C6utdlwh5XkDBjlzjuzFSSSIlV8jWuzEQVHbW4oyxLxykaaToKQBw0T3Gm43gpMRzxOM+8tnzymkk7ylgf2j0j7JQymQWMHu0PMUsjikyvFwFzgZ0xSkp0xSpIlMpqcEUJUUIUt0yqnyPlp7iPSnHQKNtnEc3Rd0U+I+fzFB0CG2JQgProdOM/XjQEOI1SMMu+hKLlC/H3fWdCQokE/WnChEEBD0FAUxViREx5+fdToJNlHLQL6qO8BP1w198006p7CYUaHP5CkCe4WU2Fhp8KdBCjlp1WCrqV5irPc16yq3ReAOJYXIlh2W0aOzJgTnmQYyoQpTsl9wFs3lvqFZAlpyGwEyy9S4R2nImFMwOQoQnWr7O4aer2y0QQW7PWlcwHDaXRHH/cGR7XtiFz7FsS7TtOC0pS2xLxkTbTUgE6wThBPcTyqvia4o0y/y71NQomq8NW6FjZ9jt9hACfN2OupzPPMwK50vq4l3WP2C36VBrOrTF03dFi9tVxbjQtkNMA+3BBMDVs4BMACRyqchlEEDXnyUlYU6Qhxl0WG7v58l1dKt+N1ps22KBcmZSQzNkSsjQCRpqZqXDUG5c7go8NQa7rO8FQ7NvC7bbEtxlOupIPipyPnVl1NjhBCtOo0yIIA7lrdi2axfsi+QbZzLwxgMCcRAM5E5+YrIq0Mr8uvBZVVgYTm3b1W3NvRA1q2nWBm7TXQCAoGXYAg5xqeOnCrVHC9HDiY4Rx71mOxgIIpie/h3Kx3Pv7MW7uFdACAAF7o0wxxgRHjBWw1szbpcPjcxyv8AAp/SXcmzupuu3VMNXUTiOgDL97yqCjUfOUXWyzHHDtl1wPTuWb2LZtotn/tv29ruEDmRBzQzPdxzqeq1jv6ljz5qenXw+IbnpuyneOfp6qx2rYbe0Lhv2SrgaNkyyMiCM4+uBAqtqVMO6WOt6FRPp06wLXCY5sVg95WbmyXTbkGBNtmAYqpMysiFaRBIEyJEV0mFxAr0w7z71h4iiaT8vkqu45YlmJZjmSxJJPMk5mrCgTaEIoQrXoruz7TtlixoHfM6wFBdiRyhTQhfSe1XFs2WIEKiZAZwAIHypr3ZWkqWhT6So1nErJ294FP2Ze4EUXXLi7cc3urW2qC2WYkS9zNUOZSNDFUWvi02veTeI08eC3nYcP64aMxyiMoGXMXEl0AAwBq4aGdQrG3tV+0F69yTgUvhKzkJMAwASEYn/wDQ8FmUOeyM555+vYqjqVCtPQttJiZ4x3m5H/jxcu3pVZFzZLhOgXrP5Rmw81mn4podSKr7MeaeLaBvMeJsPVeNssEjkYrnCIK9DaZEprtAJ5Z0ASYSOdlBJVGOlNn8Nz0X/wCqvfp1XiPX7LCH8R4U/wBrvIfdWFredtrbXVMhQSRHaECYg1XdhnteGEXK0ae0aFSg6uwyGgyN9r6FQbPv2263HCvFsAmQJgzpn3VI/BvY5rSRfngq9HbNCrTfUaHQwSdN86X7Fz/6ps/huei//VSfp1XiPX7Kt/qLDftd5D7qYdIbXV9ZheA+DRZmMXPSKZ8FUz5JExP04Kb9bw5o9NldGbLoJmJ4qH/VNn8Nz0X/AOqk/TqvEev2UP8AqLC/td5D7qytbwVrPXZhYLZxMCZ491VXUHNqdHv+606eNpvw3xInLBPbZcmxb/tXXCKHBMxIEZAnge6pquCqU2lxItzwVPC7aw+Iqik0OBPEDhPFWtU1sKZh2F7p9f8AEU/+0KIfOUn3PA/H/FJuS6PS3dDlrlPDKlKay5Quevv19x+NIlMDRJd5DSKClbxKjpE9KRy9aE2x1QO+hKexOjKeEfXxpUkp1ojQa8cqUJrpmSjGBln5D86JhGUm6wldSvMEUISETrQhdjbfeuKtlm6ySETrAHZSSAAjsCyDTJSB3UjnBoLjuSgEkAL0DYdhsbFamM8sTEAux4aeOQ0E1y9WtVxT/Ybguho0GUWwBf1K5k2Q3yb9+QmiIMi5yMAxkmmJ/IaCpi5tFuUc87gpqlcYcQLvPpz6+S7jduPcBWTcJ7OHKI4L+FRn7541RzOc6yyZJM71X9Idje3eJcDt9rEMgTHaAnvB8iK1sLUDmQNy2cK8FoG8KsJBn0/IVZVgkEEla3ZAqbIbDthuNLGAWwMTkDHEQpInWdKz3y6qHt0HqsyrRfiMxaLH7QrPdOwbOltmU41IKszwIESQZiBoT5VDWqVHmHeiqMwraBIi/as/tT7IXgXbuGdQhMDjDSCR3wdONW2fEAXATTsgOuAR2SPrdWm8NjW7s1tNkAZcUyD3GS2KO1J0P+K7XltUuqaqPE4cml0bBvCh3Bsv2a63XXFQlfZnWTkxOgGR486SvWa9oAUOEw7qLiXkaKTpXtOFLV60VbCxVoYHJhkCRPEepFMpMDpa5bWEYKhIBvFvsq3bNitbbaWfJh7SHjHoMtKSlVqYV5j8FFag2qMrxBHmF5retFGZG1Vip8QYkd2VdQxwe0OG9c85pa4tO5MpyaihCvegu0rb3hsrMQF60KS2gDdmTmOdCF9D782prWz3bimCil+eS5sBOUkAgE5AkHOo6ri1hIVnB0m1a7Kbt5jz08J17Fmtp2raACFuYiOpt4gFP/cuTjFvECAqqykycgvjVRzqlwDwHieHpzK16dLDkgubA65i46jdJiLkggd/cu3DebaVsFsShetYslpmAIVUL5ATIvLK8FXWSakh5fkPfoPCfXRV/wCS3DmsBBmAAXAbyYubfKb7yexXW+bqrYuF/ZwkHwOR90nyqeqQGGVn4RrnVmhusrw6a5demJl/2W8D8Kcz5go6v9N3cViej+yJcLhxIFskZkQZGeVbuLqupgFvFcJsjDUsQ5zagmGyNdbcEblc4NoHA2GJ8Rp8TRiR1qZ/6gjZjj0dccaZ9P8AK7uidlXF5WEqQoI7u1yqDaDywscNb/RX/wCH6TKorU3iQQ2f/JM6S7JZtBFtpDHMmWMKMuJ4n4GlwVWrVJLzbwTdtYXC4YNZSbDjfUm3id59lZbm3Sh2dRcWcR6yJI4Qun8PxqticS4ViWHS339Vp7N2ZSfgmtrCcxzbxugadio9/wBi2l0W7KxAE5kyx0GZ5R61ewj3up56h/wsHa1GhSxAo0GxGtyZJ0F+bq93la6nYinHCF8SSMXxNUKDulxWbx8tFv42n8Jss0uwDxJv9Vmd13MN6038Q9CcJ+dalduak4dn5XLYF/R4mm7tHqYXoNc4vR1NYzxLzBPmMwfj605u8KOpaDzdFhZy56ePD8vOlaNyR5i6kmdRzkeXHzFOUcQmQZPOmp9oSlvy5SaWUgCjPl8PQCmqRBmhAhIzHSaEADVJg4SBSQlzb1JaSZz7iNKcBKY4wo7uukU06p7dFiK6teWooQihC1HQfc4uN9oc5ISEXm3Fj3DQd9ZG08UWjom79fstLAYcOPSO3aLbbFs1raLtxbi41tqpAkgS0k6cYA8mNZbA6myRv557lpPqPYQ9p4hcF43HulHX9r7IUaYeATkoHznnUTwXG2nOvbz2LOdM31Wr3FuXDIBBuESzHgJyVcjl8YnkBYw+GNWQzdx5/wAIc4U9VYvucXLLi9bBYFiAYYMNVkZgnhl3ca1W4MdEG6O4jj3qD4gh+YGyzd/Ztms4+qW2LypiGcuv8QBkrAM5VmDpnAF05SfBaLX53hjiqazZDEyYVQSxMwqqJZj5VZJIiNT6ngtStVbSaSfAJeke3r1NuzaDIurK4KtAAKlhxBJnxXuooUiKhe6D2jTt8vqqGGPSPLjrrdZ6NNZ8qtrT3BXnRPbOquNjOFCpZuQKkYWjzOfeOVVsUzM0RrKz8bAaHnkK22jbdjv3R+0ZWMKG0U8hnprxFUX4V8SQsoYqi92Wfdd2y7iRWJY41KlcLBeOs5xUDBlPV1VhoynMFnrG7n2XaMBk2n9h+BI0BOgbIjvhas1j0lOd41553rSdVbVDXjXQ/TnuCz3Tfc2E/aV0ZgHXv0Vh4xBHhV/ZeKn+Sd2n2WRtDDx/NHisnWwsxFCEqzwme7WhC93/AOn3Ti3tdtbN9wu0qMJDZC5wxDKCSIkd/GhEwtoNlTs9hewcSjCOyYIleRgnMczSZRwT+lfcyb6317+KUoiszwAzAAniQswO+JOXeaSADKXM97QzcNBwlee9OukwufsLRkfeI94BHE6GNBI4kDJx2KDuo1dXsXZhp/zqgvuHPO/cJxNZa6VMv+y3gfhTmfMFHV/pu7isBuzZblwlbRzw59rDK5ZHnwyroa9SnTEv49687wOHr1yWUdYveLc7loNl3ObOz32cjE1sjLQCDlPGflVB2JFaswN0BC6Clsx2EwdZzyC4tOmgEHkpnRBYa74L/wC1O2lo3x+ij/hr5qvc3/8ASrrp+1bVH3SY/kXX1z/qqdv/AA2H7fqefRUHn9R2hA+Un/xH39ytltF0IhY6KCfIVisaXuDRqV21aq2jTL3aAeyyPR+yb20G42eEm4f+RPZHrn/LWxi3ilRyDfbw389q43ZFJ2Lxpqv3dY950H27lZ9MbkWkXm8+QB+ZFVdmtl5PYtX+I6kUGM4u9gfws7tpULaKMCRbExwbEWz7860qWaXZhv8ASIXNYksDKRpm4bfsMk/Vb+0+JQRxAPrXOuEEheiU3h7A4bwprJggxOoI0yIg/Glba6a+4hPvCDlodD3ciO7TypxsU1lxdNu64uefnx/Pzpp4p7IiEFjpPrmKLogawm8fryoSpQNPrxoSE6o8vM50IRAPDzFGqLhFwZ5/R40HVDSCFJb1nmQfjPzpw1THaR3pbSyNJ8aAJQ4wdVga6heZIoQkuZCTpzoQvSNw7Kdl2IYx2grOQNZaSF8shXM4l4r4mW6WH5W/hqZp0Q06/dWu5L6bPsrbQzS9wlj/ABFS4VV5Zye6aV7TUfkajHVW0jlJs31J+6qB0j2nFjldNAqxBAMZgGPOdKs/DUohYDsbWDr+ULQ9Hd93bzM2AW0RYZwSJbKAMXswCxJmcxnnULw7D/03XPcruHq/EfM2w91pdg3snVKiXMbhe1mSQTrnpHnWg7GsbTzb40jfz+EOwzw6CIH0VFtWwWkY3LlwhMRfAQAC5XATMYm7P3RWQK7smWBpE74mY1jXfEq0QAc3MxCp/t4QFbSgKTLG5mzjPI8AsSOJz4GoX1y4jf6eXalqV3PMld+1bgtXrA6oFGaHDOWYnswFJJmAMo0HCrLcTUDw5193Dk8lPouFMyAs0dybSrR1LeORB85y86vDEUiJlaHxTdZVvu2wuyhjchrrCMIGJUBzhjIBJMExyA76r1XGtZunuoiKmIMtsFVWt1M+PtqDDNERigE9lRl5T5ZU91XIBZYtfZNVri5xF+A5hbb/AKfkvaAuSYBwTqVmJ8tPCp8K1vTPI1gesyomOcaDc3b6aKw3tsiXUuk3VYExlqmkEj8SkA+U86XF0G3qzcDT6eKmovdIaAvP98WW2nYiEzYgMBnmVYNAnnhjPnWZh3tw+JBdoPqtTE03VKJZv+oOi83rqFzyVRQhSRH17qEIsyXWDhz1BgjmZ8Jpr3ZWkqSlT6So1nEj8nwXpey9K9rtiBdLDhizj31z7cbWG9d7U2RhH/2R3KDb+kG0XgVe5kRBAAUEd8eFMfiarxBKlobOw9Eyxt/NVdQK8ihCZf8AZbwPwpzPmCjq/wBN3cVlOhi/tG/4fNa2NpD+WO/7rjv4bcOnd/2/ULS75ysXcvuN8KzcP/Vb3hdLtD/0lX/td7LI7p2grZ2lgc8KCeUll+da2IYHVaYPE+i5PZ9Y0sLiHtO5o8yR9Vzbq3l1DFlVWJEZnQcYjy9Klr4fpgASQq2Ax/wby9oBJEX3Kx3jvhruzEkBZuBTHEBcXxj0qrRwraVe17T6wtLG7UqYrAkkAS8AxwAn3XJuvfRsKVVVMmSSTPcPrnU1fCCsQSSqeB2s7BsLWNBk6kp+/t4G6tljAOFjA0zYgf8AhSYSgKReBxHt+U/auNOJZScYBgmO8x9FJvzc62ERgzGTBxRkYnKB3Gm4XFOrOIIUm1NlswdNj2kmTBmOHcFptwtisWjyXD/T2flWZimZazu/3uum2VVD8HTI4R5W+i7zkarrQF1JaEqRxBxD4H5U4XEJjuq6U20wiDp8O8UgPFK4HUIcEd/vy7qCgQUgzyj0pNUul0q8ecfXupUh0TWpEoSxSpJUl5p8o+H6GlcU1ghNR4Hgf8fP1pAYSlslSi6oyGXj+gNOzBMLHHVYCuoXmaRjAmhCs9+9m6LYzGz4bUDiyGbhj+K6bh8xSOEghKDBBXoHSJgLB4Zr8RPumuVw16nmuoa2XNHaPS/sqyxua+9uwAJW6WIk5JqZPIEKD3+MVdbWY1zp3LM2xSfWrDLoLeOt/bwVntG9tlUJbFgX8ChMbAAHDlK5Eke7lNNbh6hJdOWVPTwOZjQQLC03+hXQm1rtQFuzFoqJ6ogAN/EpGRjkQKYWOonM644qwxvw56w7iue7ZuWmBIZSDkTwPMEZeVSNex9lcz06oyzMrq2nYb9y7iwlg4DKxPZUECVnhB4AZ+tZ1RsmJ0WI9hzWVpsG5UTtN23Gkjsg9y/Mz3RQBGiVrQNVBsd65ak7UzBWhZdgZuZksuH2EgcY4ciTeqinUH8oX7ogWseJ7b9+4R5sl3m31+ia++QNpw4h1WECQcpMHHI8Y8AaY2gTSnfPIUL8SGVg06ELn2/YbXXYFuHGSJDKxUM2YBuAQrHgCZzHMU6maoZmgEd4Bt2bwO5atPGZDlIXKdjuW3WFzyYYYI1yOXA6aU4VWPF/VWjXpvYR2LU7RtAsrjBwYchhA0/DHGY+omq+He9tQFmqx6zmNpkv0VPt+8xd2e+bcI4RjpwJlypHcSO4kVLVYemzuGpTtmYinUqNZex0+vmqfo3d/wC3GcYS3lJJHuI9ar4pv83vhar7Od3+915rdBLMY+8xjlJOVdUyzR3Bcs/5j3peHlTk1Rs00IXbufZsdwTovaPyHr8KqY2t0dK2pstbY2EGIxIzaNufp6+y1AFc8u+JhPwDjn4aetLCZmJ0SYh+H4/nS2SweKWFOkj3/r8aLJJcNVHeBAJ5Ce4/nQ1twmvfDCQsrs/SK+84LSFomFDTHE66VrvwVFvzOK5KjtrF1TFOm0mJsDp5pP8AUG0klepGLUrgeQO8TTfgqETmt3hP/W8aXFnRieGV0+UoG/dozHUDLIjA+R1AOdHwdDXP6hA2xjbgUh29V3qpNo3ttCBSbVs4lx5K5wrzblrTWYag4kBxsY1GvYpau08bSa1zqbbibB1h28FD/qC/IXqVk5hcDSfATNP+CoxOYx3hQfreLzBnRiTuyunyldG0b1vp1f7NCzqWwBGxAd4mf8VGzDUXZusYG+RCsVtpYykGDI0ucJyhpkeqgbf20CZsqIEmUfIcznkKkGDonRx8woDtnGCZpC1/ldYcddEr9Ibw9q2g5hlYEeppW4CkbtcfMJtTb2Kacr2NB4EH6labYnY21LgByJIH3Z4elZlbKHkN0XT4Q1HUmuqgBx1A581LUKtpQaEhEqV+0uLiDB+R+X+acbiVGOq7Lu3fZIjSIOXI8j+RoBmyUiDISRBzHD18DRoiZFkhfOY00olLFoUi4e7zz9KWyjOZJInLOfIec0JYMJNO8HyzpE7XsSM/CKCUoG9NEUlk66xFdWvLFYbu3exay5XFaa6isQQcJLgYXAzQkaTEg5TnAhOS8Pt4NzQ7QS3iXMf3RUGJzdC7LrBUtCOlbPFbrpHbLraWYDXACeUgiT4TXOYQgOcexdPTMPae/wBitJ0kJTZbgSfZVf5SQD4dmfWihBqtniqNPrVBPFeeKfMxoIrYWsDftXRuu4RftYZxdYsebAR5gx5mmVACwzwKhrxkcCtPvjpFhuqtsAohIYHRsiCO4DPzqhSwwcyXb1zFfHFtSGaDXt7Od6sN53TdsW2tlzbLAuLeTlM5UR3wDHKjDRTqkOiYME3AO4n/ABYwrubpKYc3T6I3LeKI3WYraFz1XXNDhIGuIzEzE/lRisuZsEEx1iNCb926JjehhiZsN0o6T2MdkMBkrSfCCCfDOZ5CmYd+WoO2yjxbC+iY3X8vwsu6RnHanxxAg8Bqfn41pSsEXsFodrsW7S27lwM10BCExHC1xFgOyjI4fxHu4xWYa7mhwBtfcJg7gdRPDv7V0UQ0ZtbKrsvde6ChJusZxaeJPJAOHLLPSqrC5zp57kl1od97BduIoReyMyYIBOmXCBnxq/Spvpy9zSocU3pmhjHDnwVVs25bvbkBZR1EwZLKyifUelLUxDC2Ao8DhqlGu2o/QFVPRMHBc5Yhrzwiagxmred66WvHSnuHssNvZl+0XsEYcZ00nj/dNdDhc3Qtzaxz6Ll8RHSuy6Tz6riZpqwoUlCFb7jBDgDIEYz3jRR8T6VmbQLSyTxge5P0XSbBa9tYNFgRmPaNGj3d22WjAgd/Hw5VkLrDcpFWcyaAEpMWRlRZJdKEn58DSwkLoTbz9hgdIPw1pzDcBRVW9QkcCsPuRP2V9ywSVFsMxgDF7WY8q2MUf5jGxNyY7lx+y2Rh61TMGyA0E2idforC7vCywgXAoFxAxIMvbQcIH4p14TVZtCq25bNjHYT+Fo1MbhaggPAhzJJmXNbw/wDd6XXNvTbwEbq7oLveLkoTkoEKPctS0KJLhnbYNi/HequPxobTPQ1Jc55Jy7gBA+i7cVu61xUuKcSW7a+1kkw0mNTJEeFQQ+mGlzTYknTXcr2ajiH1G03i7WNGvyze8ambDuns5b21p120y4RivVoxmBGTAQJnKpm0ndFTgSJkj2VSpiaZxOJl2Uxlab2ix0T9p2uyRcC3QJtoimGkID2xpqZOXcKaynVBaS3eSdNd3gn1sThnNeGVAJa1osbNHzDTU8O7w67LW7r3FW4pxtbA9r2FzwzGphsqiIfTa0uboHeZ392itB9HE1HtY8GSzj8rbxpqYNuCp721odqLvmvWGfAGAe8ZA1fFNww+VusLCfXY7aBq1flz37hYH2JW1Fc+u/Ccqk6UoEoLgNU6AO8+g8vrypbBMlx7EgJU5foR3ik0KWA4XT4DDIQdY4Hw5RypddE27TfRNR+Go5HT/PfQClc3gpBa5Z9x1/WnZeCjLuKiYU0qQJsGkhOslZidaCeKAANEBqJRAlKzERkNOVKkABWHrql5cr7cbhuptsbY6y9btBUt2xdKdYhcvdC41E4QomSQTkFEiFXb929NpuI62hZL+3hwwWd2YnsqogYgASJIUEknOkcYBKUCTC9D6QDFs7Ecx5doTXJ4a1SOdF1LT1mkcR7q0v3b124EAJttgxIAnVhGGK6bje2HzyA17OsmrLRSFO9je95kaRujjN9exZrpbU6uk9nrvVHvTo41k4luIVOmMkN4RBxeIqelii8QWmezT8K4MdTpiaitei25FGHaGYOc8CgEAZkFiWAJOsZeE5VFia5MsAjio6mK6ZvV0XTe6IpcudlyMR0j1z5UYZ9WoQxsd6ya+DpSXkkTuWn2PcPVWwqt7I0iZ1Jz5mf0q67Z4dcuvzzqinV6Noa0WWV6UqTcS3xCn+4gD4e+sevTNOpkdxVouzNBCn37vJkOC2hyEFypIAP3VnInTmPlNRpsdd58JUWJq1WWptJ7YlVm5N0Mzh2BFtTiE5SRmFXhExw7qsV67Q2G3Kp4XDOc/O8QPK/cue9duXbpDqetJw4OXJV/h1z8SeNZj2lxtotAzN9VqdzbF1EMAGfViTAJjsgccIJOWUnOrWGqtoOzRNvXildTzNiVf39ucW7bMgOIS2cRoRGvf6Vt1cQKbA8g37lTbTzOLZVaPD4gfrr9RXPOMklaIECFkd3bKLYuKCSBccTocnYD3R6UYh0uHcPZXmvNSXnf/heV7QsO4mYZhPOGImurpmWA9gXNPs495TKemqTZ7DOYUSfh3mo6lVtNuZxU+Hw1XEPyUxJ51Vz0dTJ2PcvkB/j0rL2k67WjtPmum/hymYqVD2DyHI8Fdi4eOfj+etZkrpco3JSQe7x09R+VLIKaAQjqyM+HPX4UQjODZLig5RrSym5ZCbfWZ5HL10omHSgtzMLVnT0YIQJ15wk4owDXSdZ4VfOPGbPkvHFYDdgu6M0ulOWZjKNY11UX+kx++P8AT+tO/Uj+31/Cb/pof7vp+Uf6TH74/wBP60fqR/b6/hJ/pof7vp+VNsvR5rZJS+QTl7Cn4mo6mObUEOZ6qehsN9Al1OtB/wC0fVQnooDmbxn/AI/rT/1L/p9fwoT/AA2CZNU+X5R/pMfvj/T+tL+pH9vr+Ef6aH+76flTbN0fa3ODaCs6wg7+ZyOZzHOo345r/mZPipqGw6lCejrET/0j728FCOiY/en+n9ak/Uj+31/CgP8ADbR/zfT8rQ7DsvVoqO2IqI5ZcJ1+hwqjVcHPLoidy3cNTfSpNpzMb9FMzzloPdUcqwBF0gFIllOuLAz1nT4z9c6U6JrTJtomAxmKQJ5up8Y+8oPeMj+U+VPniocp3Hn3SXLZ1XNZyI+fI0hHBDXCb6povMOPkfyNJmKfkagsp1EeBj4/pRYohw3oleRPmPyosiHc/wCUdnkfUflRZHWRiX8M+JPyiiyIdxWGIrql5enWbzIyuvtIwZf+SmR7wKEKff8As6reuhPYxY0j924x2/7GWhC3O4Lx2nYQHOZBtk+BgN8DXM4pgoYo5e/8LfwtQvognX7Ky3htDLcG0KCJE8u2BDoTxzU5cZyqWgGuaaZ5HFZGND6dUVW9x89CuPadoNxi7mSddTxyVRy4f5NWWMDBlCzatV1R2Yqw3Xtd4KCz4LaAKQqoSTqEBI1OZOeWtQVmU5gCSVqYDpqzg1vyi3P1XdY367XAFSJlRhYznrDER3zl40xjXUZc10eS2auDaGS4+/utL137G2EvNjGZg9rvDeE8Rwq+/Exhw8OEwPPfZZApfzMpBhU+8r+z9YLl4g3BBmCW5iQunODWLUqF7i5xuVaGVohVnSPeVuLUmVbtjEGFtgQQMRWW7OIGIOceVrCAgujhFtR3Tx01+xjrVWNALvx6K83eP2VsF+sIRe3+LL2vOq1UzUcQIubcOxSs+UXlY/pbvMtda2nZCDCSPaYkAkEj7oyGHQkccovYSiA3Od6v4eiC3M6/BUVhzbIa2SjfiXI+7Ud3GatuAcIddXH0muEELc7Ltl2/sbNa7N3CyDMwHHEA5LIIPdPdnnmKdVrahJYCLdix61LK5zRrxXHum81pndUvrYW2MQ2gsWe/iAATETqJBIgSRyqTEZXtEuaXTbKIAbG+APDeLqBgINgfHiqvpDtTWdkdp/aNGYkQzsAzDwkmDyqvhWCtiQDp9AreIcaNAxr915/f2YLbtNPauBmjkgbAp8Sy3PQV06wVzUIVpu3CEOZDOyplrE5x+dZ2KzF+lmgnxjet/ZnRsoHrQ57mt7Ym8fUxG7crXdWydXbAPtHM/IekVnYyv0tSRpuXQ7IwRwuHDXfMbn7eAXZVVaiKEJyORoY8KUGE0tB1S451HmMj+XuonikyxonEA6EeeX6UuqQSNVbbR0cvj8HZkEYsxCm4TppGXmKsuwj+zm6o09pUDxv2duX3UN3cF1XS2SgLhiDiMAIoZpMciDlPuMNOFeHBpi/0T27RpOY54BgRu4mBv493snJ0cvkA9iGAIltQVxiMs+zJ5dk90gwlQibc3SHadAEi9tbdse/uFG247wN0dk9UAWgnRkLqRIk5DuzIpvw75cOH2lPGPokMN+tMeBAM+Kn/ANL7RMdjJsM4jE4rajhx6xSO4HlT/g6nZzH3UX6rh4m+k6dhPHsPjCqLtvCxWZgxlI07mAPqBVZwgwtBjszQ7jzukJlInKd8gMPEZnjpxp5toohc3UNNT08JxOQ+PhSxxTc24I6yPZy7+P6UTwShk6qOmp6ctKEwpC1BKUBCsRoSPCklKQDqpBfPE4hybP0Oopwcd6Yabd1u5BZPwt/UPyokcEZX8fT8o7B5r/cPlRYo647fREoOBbvJw/nRLUQ8749Uqun4W9Qf/WgEILX8R6/dYSuqXl6KEKxvDrdnVvv2B1b8zZJ/ZP8AysxtnkDaoQrLoLvkW3+z3NGJwHkxiQe4xrzy41k7Twpe3pW6jXuWjgMRlPRu36LZX97fZiVaz1lu4ZIJ0IEGJBBlQMsvYPOsukzpG63HPv7rWZhxUqETBPqn3Nq2bGY2dcIPZKsVJHOANDwzpprvabk896y30qYJaWDyCn2++t2yOqQqts5iAAAwMEAE8jPjT6FQF8k6q9gnta6NLLi23bTsqqoAF51kyJ6tTkBGmIkHuEetpjBWJJ+UeqnJ+IdwaPXnnVVlvfe0hpF5/OCD/KRHpU5oUiPlUxwtPSPUrsu7d1x6yMLEQwGmJYkjjBBX0I4VlYqj0Z7OfysvEUzTdB55+i5t83ps21z7BuDlkcBX4keVWsCZk93pKy8dORvefotH0S2mLEOwH7QhZIGUKcp17Rb1pmJb17cFNgXHor8bc96z/S3YWt3ncDsuZB5GBKnkePnVrB1A5mQ6hbmHqdXKNVUFJgCZOWWZJ4ADjVqVbfAEkrY2Lv2HZBiIF1pYLMyxyAga4VAnhI8Kzah6arbRZ7KfxFWd30+5VHui/d2i6XuuzBRoTliPCBlkJ9RSYghjIG9XK7WNIptAEXPPO5VHTXexuP8AZrYnCwxRnifLCg8yPOBwq7svC5R0zt+n3WHj8RJ6IbtVRb8Ydb1amVsqLII0OAQ7Dua51jfzVsLMXBQhXG5NjBIc55ZZaGf0rMx+IIBpjkQul2FgA54ruuItbQz62Cvaxl16KEIoQihCKEINCFbJ0hvD8BkljK6ymArrpHnPGrIxb+zkQqB2bRPHTj2zOms+HYmPv26Xt3GwM1skrK5SQomJ/gBERnNJ8S8uDjFk4bPpBjmCQHa37SfrF9ykTpHfAA7BgACV0hcGWf4ZH8x7oUYt/ZzZMOzKJM38+2ff2UOx75u2zcYEHrDLYgTPtd+naPoKayu9pJG9PrYKlUDWn+3SPD7LqPSe+MpQ5o3s8UjDof4RMVJ8XUHDd6KH9LoHjv38Zn3VNceSTAEmYEwPUk+pqqTJlaLW5QAm0icpbbAjCTHf9fWZpwO4qNwIuEmIDTM8+Hpx8/SiQEsE6phM5mmynAAaJKEqKEIoQihCKEIoQihCKEJQKEhKCKWESsysfZWy7XWjOF0A5nOATw/EOddWvLFX0IU+xbU1pw6wdQVbNXUiGRhxUgkH3QYNCE7eNpbbJesNKziSSC9tlIOBxzBiGiGBBGchUc0OBadClBIII3L0Dde8rO22So1EY0PtLnkZ46SGHGuXrUKmFqSfA7uexdBQxDarZabjzCN27Udmu9VeIayfxCQP4hOkGJGmc1KWtqtzAX55CtvHTsMfMPVaTbdsTZgAltQCrXGIK21hYkiQZbPJe4503D4fppudQNJ1nXstc+iyXuy+vZp9Vnemdk9cHg4biiDoREyO46H15VYwbhlLd4K0sI4FuVUc/wCKuK9IlXW79iP2drxGXWLh71Eqx8Jb+2szHEOOUbh+VlY1wc8xuXXujZ7d5ntuMSlZkfdZTC9rQSGbxqrRL2XFlQyteC1wkJu2dDmmbTgg/vGOLnEgEHjV5mM3PHkqtXZ4cZYfA/ddFraeotizi60jJmuFmWdMCL+EaZRmNKQs6V2Y251WvhME4Uxmd+fwurcu0WwGfqbNoKJNxFCx/DnrI5Gm1mkQMxPYTKfVokODWmSdyye03W2zaCwkA6ccCDIefdzk1ISKTLrRJGHphgueb/bj3Kz27bLWx2lXPEclRc2duPx1PPvqtRo1MVUtpx3Dngs6vXbSbLjc+ZWQGy3bD3NpvqFdWPVwyuGvsWEqyyp6oh2MHJkRTE107GhrQ0blz7nFxJO9UYFOTU62skDmQPUxSOOUE8E+mwveGDeQPMwtdstnAgWZgRJrmKr+keXREr0nCUOgotpzMDXn0U0UyFNKSkTkUIRQhFCEGhCsZb8VkehzJnvqx1uIVKG8HJSHGRNqZ4kfX0aOv2IlhuMyDac5YrRMEQImDrpx+udGVx3hJnYNztU7rH1DWde4R3+P50su7E3KzQhyjZnGnVZkkRBg4Z9Yy8x5Nlw4KQBh/dyUpL8Ws8CNBBBB4Dj+dKc3EIGTg7/KJfIza58BqNY+uVHW7EkMuIckBc5YrRiNSOBBGZ1B4+FJ1jvCU5BeHCUqu8TitCRPAETBiNZHypZdxCC1kxDlBtVsntTbyAyU5+n5flTHtJvZSU3AdWD4rlqJWFIlqczkOZ+Q40oCYXgWCWUHAnzj3R86XqpOuUSnIjz/AEosjr8UG1xUyPf6flRl4ID9xsoqapEUIRQklOjXP9KcmkykLGklKAszh/7WYMC4c+APZ17WuugmurXlqr6EIoQlAoQurdO2fZry3QJAPaHNT7QHfxHeBUGIoitTLOZUtGqaTw5egWts2fbUIttJHa/C6nMCQfPPMeNc6+nWwzusPsVv0K7XnNTNwobe0X9ljEFvWhmA+YXkRMlPKR4VK1zKuljz5qy4Uq1n9V3HceeSu/aelli4pW7s7MDr7Puz19KaKDgZaU0bPqNM5h6ru3XuLY7qrdRWdT91mMKRqGE5+BnXlQ/EVhYn2Ves6qw5HFdOy7BdF4487RxTLkoyH/bRbPsph4njHeYV9Wm6kBF7bhrvObUzwOnhekGkOnnujRaLczIrKgswSScQAAUDT3DXvFXsA+lAa35ov/lV8Q18ydE3b76viwKyOCQZAGk+uce+o9oVKThlHzApcO1wMnQrBWk1ngpJP4QvtE+EUhIAldF0gERvgBcd25d2pVtoot2VOIE6sdMR/EfCB3mKgc9tIy4yefL3TJbTcSOs46ndzzIXS+0bPsKdt82PizHuUZ8u4VAGVcU7qjTyCrVa7afWqG550WM2q59quvfuE27Cws5FgNVtINGuNmY0EkmFE10WGoCjTDN+/vWBXrdK/N5Lq3r0i6xLeJEuEqZF0tcKKHuILeNjjBKC05dSrFixntEVYUKztCEAxnRE2QDFwtbu2xgtqp4CT4kzHvrm8S/pKrnDmLL0TZtA4fCspnWL95ufdd+ED4RUcAKzJKjYjl7/AM6aYUgBQU4jOkhLm3FMpE5FCEUIXT11v91/eakzN/b6qDJU/f6BIXQ5i3H8x7iPn6jlRLeCMrxq70557077Rb/c/wBxpczf2+qb0VT9/oEnXW/3X9zHhSZm/t9U7o6n7vQJBdt/uv7mmkzN/b6pclT93oEC6kf7WeeeI88su4ZUZm8EZHz83ouemKZFCEUITl4etOTCnWlGp0HvPKgBIXHQapHck+6gmSlAACdcOg5UFI3imCkTkq5EZxxmjRIbjROuCRiGv3h8/r50puJSN6pynwUVNUieO6nKNNJpCU4BJSJyzCIfs7GBhDgzInFEaRMQeJ45ca6xeVrhoQihCfBFCEjtPhQhLsW1PYuLdtmCp04EcVPcajrUm1WFjtDzKfTqOpuDmrbbt6aWbpwXVa2WMSSCgJgRi1HOSAKwq2zKtMZmGY8/Ja9PH03nK4R7Kw2jcCNmhw9w9k+XDygVWbinCzhPutJlWowQ024Hn8LifdW0WjNtie9CUPdxj31MMRTfr68/RTDEg2qtnu/P3XVY3tt4ae2/DC6rHnp8aCKJGoTHNwhEAHyM+qstg6TbWrDrLBy+9bADQdciSp91KwtpuzU33VarQw72kAkd4P0Vq++Gb2E/muRPdCqc/wCoVDUeC4ueZPZz9FUZQdECwVa9tmxYyoD+2qjCpHIjMkcwWg8RUZrRZvhz+FYFLTMdFQbx6ZWbRKWlN0iQSMkBGUYjr5Ajvq3R2ZVqDM8x7+Sr1cfTYcrRPsspc2pL1x7+0sZ4W0BxMM4RXIK20HEmTnkpkkbtGi2iwMasirVdUcXOXPtu2NcIyCoohLayEQHWAcyTqWJLMdSalUa5qEIoQrTd+71Z17QZYxGAY9qAPOPcaoV8WWsdaDp6TPPYt3A7LbVrMOcObGYxO5xAHjF+4jtWkLViLswE9VDSdDx5UsApCS1RMsU0hSAyhWjSgGEEApTnn6/nRqkFrJtInJtxoBPITStEmE17srSeCq9l3jfe11wtW8GFmhrhBIUkNAK6yDlWt+mj93p+Vyf+pXkf0x5/hR7V0gYC0yWwwuZDtRDzBQ5RrxqKngg5zml1x2btxVqvtp9NjKjWS1w46EajT/K7VtbwJgbBJyy623xBInPLJSfCDxEy/pg/d6flVf8AUr/9sef4XLZ3htRtdeNjBtYDcxm6oGBfaMHMnPTXXI0o2Y393p+UH+JKh/5Y8/wrHdu8rd2z1rFVgHECIwka9od2fn5VRq0Cypk14WW1hce2th+n0AmbzEcyn7PdW5OCTBggqwYHLIqRIOY9RUL6bmmPz7K5RxLKrSRaLGZHboYOl+5TdU34Tl3HjpTMp4KbO3ihbLHRT6GlDSdyQvaNSnJZbUKx8AeUz6Z0oaeCYajd5SMjcjHgfGkIPBOBbxUj2mwrkYiZj8Ry9wFKWmAmh7cxvyFG1ogTB+UHSkylODgTqlvJGisB3g0EHgkYZ1IKr23oithM5HCWg4QeRPpPDnUraDyJ/wAqq/HUWvymbGCYsD3+50G8rvZCR7JgcYqKDwVsEA6qSwhLRBAMrpx4emVK0GYTKjgBM6JossPun0NGUjclL2nemC2Top9DSQeCfmaNSmU1PRQhZi03/bOI++smR/KImeDcOevDrF5WuGKEKUDw+uFCExmmhCbQhFCE10mhC6tm3ntNsBbd9wBoJkCNAAZy7qgfhaLzLmhStr1WCGuKvd39OLqqRetdY3BgcPqIjzHpWfV2Sxxlhgeau09ouA64ldey9PExftbBQc0IY+YIWon7IdHVdPfb7qRm0mz1mx3X+yk2rp0gM2rDMBlLEKfEQDw50tPZLo67o7r/AGQ/aLZ6rZ77Lj23pxddYtWhbJ+8xxR4CB6mpKeyWgy90+ijftFxEMEKiv712hwQ99yDqJwg9xwxlmcu+r7MLRYZa0Km7EVXWLiuSrChRQhFCEUIU+x7PjYaxIDRwBMVFWqZGE74MeCs4Wh01VrSDEgGN0mPBay1YVBA7vKAB+vma56rVL7legYbDMoiGaW8gIj695KeBP51FqrUgJ6MBPE+6lBATHAuTWaaQlOAhNpE5OQ/Xx91KE1yQiMqRKDITbiSpjiDlT22IKjqSWkDgqvZLm02tlOzDZ7RxI6Fy3ah8RBjSVLZf8RW38fR4+i4gbCxsfKPMKvubqvKtlURWwMLrYjk1yZgwQcIGWRBg1Xp4ul0jnuPYO4fdX8RsnE9BToUwIF3X/uP0Asru30g3oGDC3s8go0wcykgE9viMiBAgcM5sfH0ePoqP6FjP2jzCr7I24bOuz9VZKC1ctAmcZRyMWjwWECMoEAwSAQvx1Hj6Jv6JjB/aPMLo3JujDZNtxJecfITl7h76zK+INSrmZu0XTYDZ4w+ENKqLunN42jy+6st37J9ntKAxZyxYscydBnPcF9KbXrFxkW4KTA4QUmlhJdxJ3n/ABZSjaXmQ0GIygZcqr53TMq+aTIghP8AtNzXGZ+Izy79T607O7WUzoqekIbbbhjtmRnPGfr40Go7ilFCmNyQ7Zc/GeXlSdI7il6CnwUp2plww2WEZQOC4fzFOzuEXUfRNdMjefeVHb2lx7LRw4d35D0HIU0PduKeaTD8w555uh7zlYLEgxkeQ0pS5xESgMYDICpru6AzEdZCMSWUgk5mWAaYgmeBOZz0iw3EgAWuN/tzKzqmzXOc4ZuoSSRF73ImYg9xNzG6LtNocCA5jTymfiKgDnRAKvuYwmSF0W9qfGO2dc/WT408PdOqhdSZlNlzHb7n4zH17u6ozVdxU4w9Pgmja3GjEUnSO4pxosO5QUxSooQs3auD7MyYs8YgYhpqSFiQMu+THKusXla41EUITHaaEJtCEUIRQhFCEUIRQhFCEUIRQhFCEUIRQhFCE5BrQhX+4FIVjwkACPUzxH61j7ScMwG/nnyXW/w5Tf0b3nQm31Pbw7Lq0rLXTBO4ef5flS7km9NpE5TW7YjPM8pzA8KeAFE5xmyjuLBimkQntMhLH19efpRCSbpHOZ8aDqnN0STRKISUiVFCEUIT7dyNRI5aeYNKDCY5s6Kbrl/jPcxyp2Ydqj6N/YFDccsZpCSSpGtDBCF/WgIKRjSEpQE2kTkUIUy5r3r8P0M+tOFwojZ3ehFifruNKBCCZSXtaRyVqYoz50gTjpKkW5HxpwMKMtlKDAJ8QB46+gPwomyIkwoKYpkUIRQhFCFiq6xeVp93WhCZQhFCEUIRQhFCEUIRQhFCEUIRQhFCEUIRQhKuooQpzqKELQbpPY9P/EVz+O/q+fuV3uxT/wAMB3f/AFB97rtqmtdPt8fL404Jjk+9oKV2ia3VNPtDypp1Th8qL/tGldqin8qbb18j8DSBDvsm0ieihCKEIoQihCKEIoQlTWlCaU5zrSlNCZTVIihCKEKTZ/bXxHxpRqEyp8h7kja+dKdUDRI9IUrdE2aROUtjMmeX5U5qjfYBG06j/iPhNDkU9D3lRU1SIoQihCKEL//Z",
        }}
        style={styles.banner}
      />

      
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabs}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      >
        {sections.map((section, index) => (
          <TouchableOpacity
            key={section.id}
            style={[styles.tab, activeTab === section.title && styles.activeTab]}
            onPress={() => scrollToSection(index)}
          >
            <Text
              style={[styles.tabText, activeTab === section.title && styles.activeTabText]}
            >
              {section.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Deals */}
      <ScrollView ref={scrollRef} onScroll={handleScroll} scrollEventThrottle={16} style={styles.dealsContainer}>
        {sections.map((section, index) => (
          <View key={section.id} onLayout={(event) => onLayout(event, index)} style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {section.deals.map((deal) => (
              <View key={deal.id} style={styles.dealCard}>
                <View style={styles.dealInfo}>
                  <Text style={styles.dealTag}>{deal.tag}</Text>
                  <Text style={styles.dealTitle}>{deal.title}</Text>
                  <Text style={styles.dealDescription}>{deal.description}</Text>
                  <View style={styles.priceContainer}>
                    <Text style={styles.price}>{deal.price}</Text>
                    <Text style={styles.originalPrice}>{deal.originalPrice}</Text>
                    <Text style={styles.discount}>{deal.discount}</Text>
                  </View>
                </View>
                <Image source={{ uri: deal.image }} style={styles.dealImage} />
                <TouchableOpacity style={styles.addButton} onPress={() => handleAddToCart(deal)}>
                  <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>

      {isDrawerOpen && <DrawerComponent closeDrawer={toggleDrawer} />}
    </View>
  );
};

export default PickScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#C00000" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#C00000",
    padding: 15,
    paddingTop: 30,
  },
  menuIcon: { fontSize: 24, color: "#fff" },
  searchIcon: { fontSize: 24, color: "#fff" },
  deliverText: { fontSize: 12, color: "#fff" },
  locationText: { fontSize: 16, fontWeight: "bold", color: "#fff" },
  banner: { width: "100%", height: 150, resizeMode: "cover", marginBottom:5 },
  tabs: { flexDirection: "column", backgroundColor: "white", paddingHorizontal: 10, marginVertical: 10 },
  tab: { paddingVertical: 5, paddingHorizontal: 10, paddingBottom:10 ,borderRadius: 10, backgroundColor: "#C00000", marginRight: 15  },
  tabActive: { paddingVertical: 60, paddingHorizontal: 20, borderRadius: 10, backgroundColor: "white" },
  tabText: { fontSize: 14, color: "white", margin:5 },
  tabTextActive: { fontSize: 5, color: "white"  },
  dealsContainer: { paddingHorizontal: 5, paddingVertical:30 },
  sectionContainer: { marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginVertical: 20, color:'white' },
  dealCard: { flexDirection: "row", alignItems: "center", backgroundColor: "#f8f8f8", borderRadius: 10, padding: 10, marginBottom: 15 },
  dealInfo: { flex: 1 },
  dealTag: { fontSize: 12, color: "white", backgroundColor: "#C00000", padding: 5, borderRadius: 5, marginBottom: 5 },
  dealTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
  dealDescription: { fontSize: 14, color: "#666", marginBottom: 10 },
  priceContainer: { flexDirection: "row", alignItems: "center" },
  price: { fontSize: 16, fontWeight: "bold", color: "#000" },
  originalPrice: { fontSize: 14, textDecorationLine: "line-through", color: "#888", marginHorizontal: 10 },
  discount: { fontSize: 14, color: "#C00000" },
  dealImage: { width: 100, height: 100, resizeMode: "cover", borderRadius: 10 },
  addButton: { backgroundColor: "#C00000", width: 30, height: 30, borderRadius: 15, alignItems: "center", justifyContent: "center", marginLeft: 10 },
  addButtonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
