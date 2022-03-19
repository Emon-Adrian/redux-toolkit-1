#### Basic Fetch

```js
export const getMeals = createAsyncThunk('meals/getMeals', () => {
  return fetch(`https://themealdb.com/api/json/v1/1/search.php?s=b`).then(
    (res) => res.json()
  );
});
```

#### More Complex Fetch

```js
export const getMeals = createAsyncThunk(
  'meals/getMeals',
  async (name, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `https://themealdb.com/api/json/v1/1/search.php?s=${name}`
      );
      const data = res.json();
      return data;
    } catch (error) {
      return rejectWithValue('There was an error...');
    }
  }
);
```

#### Initial App.js

```js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMeals } from './features/meals/mealsSlice';
function App() {
  const dispatch = useDispatch();

  const { meals, loading } = useSelector((store) => store.food);
  console.log(meals, loading);
  useEffect(() => {
    dispatch(getMeals(''));
  }, []);
  return <h1>redux meals</h1>;
}

export default App;
```
