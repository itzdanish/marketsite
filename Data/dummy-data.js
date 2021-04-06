import Category from '../models/Category';
import Listing from '../models/Listing';

export const CATEGORIES = [
  new Category('c1', 'Haircut at Home',require('../assets/images/haircut.png')),
  new Category('c2', 'Women Massage', require('../assets/images/massage.png')),
  new Category('c3', 'Men Massage', require('../assets/images/menmassage.png')),
  new Category('c4', 'Appliance Repair', require('../assets/images/settings.png')),
  new Category('c5', 'Pest Control', require('../assets/images/insecticide.png')),
  new Category('c6', 'Baby Care', require('../assets/images/health-care.png')),
  new Category('c7', 'Plumbing', require('../assets/images/plumber.png')),
  new Category('c8', 'Painting', require('../assets/images/painter.png')),
  new Category('c9', 'Electricians', require('../assets/images/idea.png')),
  new Category('c-10', 'Carpentry', require('../assets/images/carpenter.png')),
  new Category('c-11', 'Cleaners', require('../assets/images/cleaning.png')),
  new Category('c-12', 'Salon at Home', require('../assets/images/makeup.png')),
];

export const LISTING = [
  new Listing('mslc1','c1', 'Farhad Khan','5','7828992561','300','10',require('../assets/images/profile_pic/Farhadkhan.jpg')),
  new Listing('mslc2','c9', 'Farhan Shaikh','5','9828992431','400','10',require('../assets/images/profile_pic/Farhanshaikh.jpg')),
  new Listing('mslc3','c-10', 'Pankaj Kumar','5','8828992561','600','10',require('../assets/images/profile_pic/pankajkumar.jpg')),
  new Listing('mslc4','c4', 'Michael Peter','5','9828129261','900','10',require('../assets/images/profile_pic/michaelpeter.jpg')),
  new Listing('mslc5','c-12', 'Saloni Datta','5','8278992561','300','10',require('../assets/images/profile_pic/salonidatta.jpeg')),
  new Listing('mslc6','c-12', 'Riya Singh','5','7828992561','200','15',require('../assets/images/profile_pic/riyasingh.jpeg')),
  new Listing('mslc7','c-11', 'Rajat Jadhav','5','7938992561','500','10',require('../assets/images/profile_pic/rajatjadhav.jpg')),
  new Listing('mslc8','c8', 'Riyaz Khan','5','5828992561','300','10',require('../assets/images/profile_pic/rajatjadhav.jpg')),
  new Listing('mslc9','c6', 'Pramila Singh','5','7828282561','300','10',require('../assets/images/profile_pic/pramilasingh.jpeg')),
  new Listing('mslc10','c6', 'Rupali Kamarta','5','9828782561','800','10',require('../assets/images/profile_pic/rupalikamarta.jpeg')),
  new Listing('mslc11','c2', 'Shivani Kumar','5','7828992561','600','10',require('../assets/images/profile_pic/shivanikumar.jpeg')),
  new Listing('mslc12','c2', 'Priya Wagh','5','7828909561','300','10',require('../assets/images/profile_pic/priyawagh.jpeg')),
  new Listing('mslc13','c3', 'Sanjay Singh','5','8828492561','900','10',require('../assets/images/profile_pic/sanjaysingh.jpg')),
  new Listing('mslc14','c7', 'Sushil Kumar','5','9828992561','800','10',require('../assets/images/profile_pic/sushilkumar.jpg')),
  new Listing('mslc15','c5', 'Rupesh Pawar','5','8828967561','600','10',require('../assets/images/profile_pic/sushilkumar.jpg')),
  
];

