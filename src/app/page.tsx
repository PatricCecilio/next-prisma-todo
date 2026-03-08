import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ListCheck, Plus, Sigma, SquarePen, Trash } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { List, ArrowDownRight, Check } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Home = () => {
  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">

      <Card className="w-lg p-4">
        <CardHeader className="flex gap-2">
          <Input placeholder="Adicionar Tarefa" />          
          <Button variant="default" className="cursor-pointer"><Plus/>Cadastrar</Button>
        </CardHeader>

        
        <CardContent>

          <Separator className="mb-4" />
          <div className="flex gap-2">
            <Badge className="cursor-pointer"><List/>Todas</Badge>
            <Badge className="cursor-pointer"><ArrowDownRight/>Não finalizadas</Badge>
            <Badge className="cursor-pointer"><Check/>Concluídas</Badge>                    
          </div>
        

          <div className="mt-4 border-b-1">

            <div className="h-14 flex justify-between items-center border-t-1">
              <div className="w-1 h-full bg-green-300"></div>
              <p className="flex-1 px-2 text-sm">Estudar React</p>
              <div className="flex items-center gap-2">        
                 

                <Dialog>
                    <DialogTrigger asChild>
                      <SquarePen size={16} className="cursor-pointer"/>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Editar Tarefa</DialogTitle>
                      </DialogHeader>
                      <p>Conteúdo do diálogo</p>
                      
                      <div className="flex gap-2">
                        <Input placeholder="Editar Tarefa" />
                        <Button variant="default" className="cursor-pointer">Editar</Button>
                      </div>

                    </DialogContent>

                </Dialog>


                <Trash size={16} className="cursor-pointer"/>
              </div>
            </div>
          </div>




          <div className="flex justify-between mt-4">
            <div className="flex gap-2 items-center">
            <ListCheck size={18} />
            <p className="text-xs">Tarefas concluídas (3/3) </p>
          </div>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="text-xs h-7 cursor-pointer" variant="outline"><Trash/>Limpar tarefas concluídas</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
              <AlertDialogTitle>Tem certeza que deseja excluir x itens?</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogAction>Sim</AlertDialogAction>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
          </AlertDialog>

          </div>
          <div className="h-2 w-full bg-gray-100 mt-4 rounded-md">
            <div className="h-full bg-blue-500 rounded-md" style={{ width: "50%" }}></div>
          </div>

          <div className="flex justify-end mt-4 items-center gap-2">
            <Sigma size={18}/>
            <p className="text-xs">3 tarefas no total</p>
          </div>
        
        </CardContent>

      </Card>
    </main>
  );
};

export default Home;