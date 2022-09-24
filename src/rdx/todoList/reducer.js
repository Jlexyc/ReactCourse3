import { v4 as uuidv4 } from 'uuid';
import { REMOVE_TODO_ITEM, ADD_TODO_ITEM, EDIT_TODO_ITEM } from './actions';

const initialState = {
  data: [
    {
      id: '123',
      description: 'Buy Milk',
      when: 'Tomorrow',
      priority: 1,
      done: false,
      longDescription: 'Dinosaurs are a diverse group of reptiles[note 1] of the clade Dinosauria. They first appeared during the Triassic period, between 243 and 233.23 million years ago (mya), although the exact origin and timing of the evolution of dinosaurs is the subject of active research. They became the dominant terrestrial vertebrates after the Triassic–Jurassic extinction event 201.3 mya; their dominance continued throughout the Jurassic and Cretaceous periods. The fossil record shows that birds are feathered dinosaurs, having evolved from earlier theropods during the Late Jurassic epoch, and are the only dinosaur lineage known to have survived the Cretaceous–Paleogene extinction event approximately 66 mya. Dinosaurs can therefore be divided into avian dinosaurs—birds—and paraphyletic pseudo-extinct non-avian dinosaurs, which are all dinosaurs other than birds.'
    },
    {
      id: '223',
      description: 'Sell ETH',
      when: 'Next week',
      priority: 2,
      done: false,
      longDescription: 'Dinosaurs are a diverse group of reptiles[note 1] of the clade Dinosauria. They first appeared during the Triassic period, between 243 and 233.23 million years ago (mya), although the exact origin and timing of the evolution of dinosaurs is the subject of active research. They became the dominant terrestrial vertebrates after the Triassic–Jurassic extinction event 201.3 mya; their dominance continued throughout the Jurassic and Cretaceous periods. The fossil record shows that birds are feathered dinosaurs, having evolved from earlier theropods during the Late Jurassic epoch, and are the only dinosaur lineage known to have survived the Cretaceous–Paleogene extinction event approximately 66 mya. Dinosaurs can therefore be divided into avian dinosaurs—birds—and paraphyletic pseudo-extinct non-avian dinosaurs, which are all dinosaurs other than birds.'
    },
    {
      id: '323',
      description: 'A Visit a doctor',
      when: 'Today',
      priority: 2,
      done: false,
      longDescription: 'Dinosaurs are a diverse group of reptiles[note 1] of the clade Dinosauria. They first appeared during the Triassic period, between 243 and 233.23 million years ago (mya), although the exact origin and timing of the evolution of dinosaurs is the subject of active research. They became the dominant terrestrial vertebrates after the Triassic–Jurassic extinction event 201.3 mya; their dominance continued throughout the Jurassic and Cretaceous periods. The fossil record shows that birds are feathered dinosaurs, having evolved from earlier theropods during the Late Jurassic epoch, and are the only dinosaur lineage known to have survived the Cretaceous–Paleogene extinction event approximately 66 mya. Dinosaurs can therefore be divided into avian dinosaurs—birds—and paraphyletic pseudo-extinct non-avian dinosaurs, which are all dinosaurs other than birds.'
    },
    {
      id: '423',
      description: 'C Visit a doctor 4',
      when: 'Today',
      priority: 1,
      done: false,
      longDescription: 'Dinosaurs are a diverse group of reptiles[note 1] of the clade Dinosauria. They first appeared during the Triassic period, between 243 and 233.23 million years ago (mya), although the exact origin and timing of the evolution of dinosaurs is the subject of active research. They became the dominant terrestrial vertebrates after the Triassic–Jurassic extinction event 201.3 mya; their dominance continued throughout the Jurassic and Cretaceous periods. The fossil record shows that birds are feathered dinosaurs, having evolved from earlier theropods during the Late Jurassic epoch, and are the only dinosaur lineage known to have survived the Cretaceous–Paleogene extinction event approximately 66 mya. Dinosaurs can therefore be divided into avian dinosaurs—birds—and paraphyletic pseudo-extinct non-avian dinosaurs, which are all dinosaurs other than birds.'
    },
    {
      id: '623',
      description: 'B Visit a doctor 3',
      when: 'Today',
      priority: 0,
      done: false,
      longDescription: 'Dinosaurs are a diverse group of reptiles[note 1] of the clade Dinosauria. They first appeared during the Triassic period, between 243 and 233.23 million years ago (mya), although the exact origin and timing of the evolution of dinosaurs is the subject of active research. They became the dominant terrestrial vertebrates after the Triassic–Jurassic extinction event 201.3 mya; their dominance continued throughout the Jurassic and Cretaceous periods. The fossil record shows that birds are feathered dinosaurs, having evolved from earlier theropods during the Late Jurassic epoch, and are the only dinosaur lineage known to have survived the Cretaceous–Paleogene extinction event approximately 66 mya. Dinosaurs can therefore be divided into avian dinosaurs—birds—and paraphyletic pseudo-extinct non-avian dinosaurs, which are all dinosaurs other than birds.'
    },
    {
      id: '523',
      description: 'D Visit a doctor 2',
      when: 'Today',
      priority: 2,
      done: false,
      longDescription: 'Dinosaurs are a diverse group of reptiles[note 1] of the clade Dinosauria. They first appeared during the Triassic period, between 243 and 233.23 million years ago (mya), although the exact origin and timing of the evolution of dinosaurs is the subject of active research. They became the dominant terrestrial vertebrates after the Triassic–Jurassic extinction event 201.3 mya; their dominance continued throughout the Jurassic and Cretaceous periods. The fossil record shows that birds are feathered dinosaurs, having evolved from earlier theropods during the Late Jurassic epoch, and are the only dinosaur lineage known to have survived the Cretaceous–Paleogene extinction event approximately 66 mya. Dinosaurs can therefore be divided into avian dinosaurs—birds—and paraphyletic pseudo-extinct non-avian dinosaurs, which are all dinosaurs other than birds.'
    },
  ]
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_ITEM:
      return {
        ...state,
        data: [...state.data, action.item],
      }
    case REMOVE_TODO_ITEM:
      return {
        ...state,
        data: state.data.filter(e => e.id !== action.itemId),
      }
    case EDIT_TODO_ITEM: 
      return {
        ...state,
        data: state.data.map(element => {
          if (element.id === action.item.id) {
            return action.item;
          } else {
            return element;
          }
        })
      }
    default:
      return state;
  }
}