import React, {Component} from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component {
  static defaultProps = {
    recipes: [
      {
        title: 'Spaghetti',
        instructions: 'Open jar of spaghetti sauce Bring 8 cups of water to a boil. Boil pasta for 8 minutes. Combine pasta and spaghetti sauce.',
        ingredients: ['pasta', '8 cups water', '1 box spaghetti', '1 jar spaghetti sauce'],
        img: 'spaghetti.jpg'
      },
      {
        title: 'Breakfast Sandwich',
        instructions: 'Cut busicut in half. Layer eggs and bacon and cheese on top of one another inside both halves to form a sandwich.',
        ingredients: ['busicut', 'eggs', 'bacon', 'cheese'],
        img: 'breakfast-sandwich.jpeg'
      },
      {
        title: 'French Fries',
        instructions: 'Get in your car, drive to McDonalds, and order french fries. Otherwise this recipe may turn out to be more trouble than it is worth.',
        ingredients: ['car', 'gas', 'will to move'],
        img: 'french-fries.jpeg'
      }
    ]
  }
  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object)
  }
  
  render () {
    const recipes = this.props.recipes.map((r, index) => (
      <Recipe key={index} {...r} />
    ));
    
    return (
      <div className='recipe-list'>
        {recipes}
      </div>
    )
  }
}

export default RecipeList;