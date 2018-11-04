import React from 'react';
import '../styles/options.scss';

const Options = ({ handleSubmit }) => {
  const categories = [
    {
      id: 9,
      category: "General Knowledge",
    },
    {
      id: 12,
      category: "Music",
    },
    {
      id: 17,
      category: "Science & Nature"
    },
    {
      id: 20,
      category: "Mythology",
    },
    {
      id: 27,
      category: "Animals",
    }
  ]

  const difficulties = ["easy", "medium", "hard"];
  const initialId = categories[0].id;
  const initialDifficulty = difficulties[0];

  return (
    <form className="options" onSubmit={(e) => {
      e.preventDefault();
      handleSubmit(e.target.categorySelect.value, e.target.difficultySelect.value);
    }}>
      <fieldset className="options__category">
        <legend>Select a category</legend>
        {categories.map(item => {
          const { id, category } = item;
          return <p key={id}>
            <label htmlFor={category}>
              <input
                type="radio"
                name="categorySelect"
                id={category}
                value={id}
                defaultChecked={id == initialId ? true : false} />
              <span>{category}</span>
            </label>
          </p>
        })}
      </fieldset>

      <fieldset className="options__difficulty">
        <legend>Select a difficulty level</legend>
        {difficulties.map(item => {
          return <p key={item}>
            <label htmlFor={item}>
              <input type="radio" name="difficultySelect" id={item} value={item} defaultChecked={item == initialDifficulty ? true : false} />
              <span>{item}</span>
            </label>
          </p>
        })}
      </fieldset>
      <button type="submit" className="btn">Submit</button>
    </form>
  )
}

export default Options;