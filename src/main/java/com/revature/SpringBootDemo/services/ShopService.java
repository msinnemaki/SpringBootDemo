package com.revature.SpringBootDemo.services;

import com.revature.SpringBootDemo.models.Shop;

import java.util.List;

public interface ShopService
{
    //create a new shop
    boolean createShop(Shop shop);

    //get a shop by ID
    Shop getShopById(int id);

    //get all shops
    List<Shop> getAllShops();

    //update a shop
    boolean updateShop(Shop shop);

    //delete a shop
    boolean deleteShop(Shop shop);
}
