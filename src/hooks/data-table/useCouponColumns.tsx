import TableDeleteButton from '@/components/UI/TableDeleteButton/TableDeleteButton'
import TableEditButton from '@/components/UI/TableEditButton/TableEditButton'
import ToggleButton from '@/components/UI/ToggleButton/ToggleButton'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

const useCouponColumns = (onDelete: () => void) => {
  const searchParams = useSearchParams()

  return useMemo(
    () => [
      {
        id: 'name',
        name: 'Nome',
        selector: (row: any) => row.name,
        sortable: true,
        format: (row: any) => <p title={row.name}>{row.name}</p>,
      },
      {
        id: 'code',
        name: 'Código',
        selector: (row: any) => row.code,
        sortable: true,
        format: (row: any) => <p title={row.code}>{row.code}</p>,
      },
      {
        id: 'value',
        name: 'Valor',
        selector: (row: any) => row.value,
        sortable: true,
        format: (row: any) => {
          if (row.type === 'percentage') {
            return <p title={row.value}>{row.value}%</p>
          } else {
            return <p title={row.value}>R${row.value.toFixed(2).replace('.', ',')}</p>
          }
        },
      },
      {
        id: 'quantity',
        name: 'Quantidade',
        selector: (row: any) => row.quantity,
        sortable: true,
        format: (row: any) => <p title={row.quantity}>{row.quantity}</p>,
      },
      {
        id: 'expireAt',
        name: 'Expira em',
        selector: (row: any) => row.expireAt,
        sortable: true,
        format: (row: any) => <p title={row.expireAt}>{row.expireAt}</p>,
      },
      {
        id: 'active',
        name: 'Status',
        width: '100px',
        selector: (row: any) => row.active,
        sortable: true,
        cell: (row: any) => (
          <ToggleButton name="active" defaultChecked={row.active ? true : false} />
        ),
      },
      {
        name: 'Ações',
        width: '180px',
        center: true,
        sortable: false,
        cell: (row: any) => (
          <div className="flex gap-2">
            <Link href={`/dashboard/cupons/editar/${row.id}?${searchParams.toString()}`} as={`/dashboard/cupons/editar/${row.id}`}>
              <TableEditButton />
            </Link>
            <TableDeleteButton onClick={onDelete} />
          </div>
        ),
        style: {
          textAlign: 'right',
        },
      },
    ],
    [searchParams, onDelete],
  )
}

export default useCouponColumns
