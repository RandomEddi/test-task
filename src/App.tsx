import { type FC } from 'react'
import { useAppDispatch, useAppSelector, itemsActions } from '@/store'
import { motion, AnimatePresence } from 'framer-motion'

export const App: FC = () => {
  const items = useAppSelector((state) => state.items.items)
  const dispatch = useAppDispatch()

  const handleAdd = () => {
    dispatch(itemsActions.addItem())
  }

  const handleRemove = () => {
    dispatch(itemsActions.removeItem())
  }

  return (
    <div className='items'>
      <div className='buttons'>
        <button onClick={handleAdd}>Добавить</button>
        <button onClick={handleRemove}>Удалить</button>
      </div>
      <div className='list'>
        <AnimatePresence initial={false}>
          {items.map((item) => (
            <motion.div
              key={item.id}
              className='list-item'
              style={{ backgroundColor: item.color }}
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
