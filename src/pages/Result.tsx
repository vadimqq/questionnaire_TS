import React from 'react'
import { useSelector } from 'react-redux'

import { Container } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Chip from '@material-ui/core/Chip'
import { RootState } from 'typesafe-actions'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
  title: {
    marginRight: '10px'
  },
  languages: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  content: {
    padding: '5px 0'
  }
}))

export const Result = () => {
  const styles = useStyles()
  const info = useSelector((state: RootState) => state.info)
  const questionnaire = useSelector((state: RootState) => state.questionnaire)

  return (
    <Container
      component="main"
      maxWidth="xs"
      className={ styles.container }
    >
      <Typography component="h2" variant="h5">Ваш результат</Typography>
      <Card className={ styles.root } variant="outlined">
        <CardContent>
          <div className={ styles.content }>
            <Typography variant="h5" component="span" className={ styles.title }>
              Имя:
            </Typography>
            <Typography className={ styles.pos } color="textSecondary" component="span">
              { info.firstName }
            </Typography>
          </div>
          <div className={ styles.content }>
            <Typography variant="h5" component="span" className={ styles.title }>
              Фамилия:
            </Typography>
            <Typography className={ styles.pos } color="textSecondary" component="span">
            { info.lastName }
            </Typography>
          </div>
          <div className={ styles.content }>
            <Typography variant="h5" component="span" className={ styles.title }>
              Город:
            </Typography>
            <Typography className={ styles.pos } color="textSecondary" component="span">
              { info.city }
            </Typography>
          </div>
          <div className={ styles.content }>
            <Typography variant="h5" component="span" className={ styles.title }>
              Возраст:
            </Typography>
            <Typography className={ styles.pos } color="textSecondary" component="span">
              { questionnaire.age }
            </Typography>
          </div>
          <div className={ styles.content }>
            <Typography variant="h5" component="span">
              Языки програмирования
            </Typography>
            <div className={ styles.languages }>
              { questionnaire.languages.map((item: string, id: number) => {
                return (
                <Chip
                  variant="outlined"
                  size="small"
                  label={ item }
                  key={ id }
                />)
              }) }
            </div>
          </div>
        </CardContent>
      </Card>
    </Container>
  )
}