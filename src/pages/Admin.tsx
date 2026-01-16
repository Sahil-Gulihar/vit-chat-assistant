import { useState, useEffect } from "react";
import { Trash2, RefreshCw, Users, Phone, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Lead {
  name: string;
  phone: string;
  timestamp: string;
}

const STORAGE_KEY = "vit_chat_leads";

const Admin = () => {
  const [leads, setLeads] = useState<Lead[]>([]);

  const loadLeads = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      setLeads(JSON.parse(data));
    } else {
      setLeads([]);
    }
  };

  useEffect(() => {
    loadLeads();
  }, []);

  const deleteLead = (index: number) => {
    const updatedLeads = leads.filter((_, i) => i !== index);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedLeads));
    setLeads(updatedLeads);
  };

  const clearAllLeads = () => {
    if (window.confirm("Are you sure you want to delete all leads?")) {
      localStorage.removeItem(STORAGE_KEY);
      setLeads([]);
    }
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <header className="bg-vit-navy text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-white/70 hover:text-white transition">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="font-heading font-bold text-xl">Admin Dashboard</h1>
                <p className="text-white/60 text-sm">Chatbot Lead Management</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button
                onClick={loadLeads}
                variant="outline"
                size="sm"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
              <Button
                onClick={clearAllLeads}
                variant="destructive"
                size="sm"
                disabled={leads.length === 0}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Clear All
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-vit-gold/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-vit-gold" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Total Leads</p>
                <p className="text-3xl font-heading font-bold text-foreground">{leads.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Today</p>
                <p className="text-3xl font-heading font-bold text-foreground">
                  {leads.filter((l) => new Date(l.timestamp).toDateString() === new Date().toDateString()).length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Phone className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Unique Phones</p>
                <p className="text-3xl font-heading font-bold text-foreground">
                  {new Set(leads.map((l) => l.phone)).size}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="px-6 py-4 border-b border-border">
            <h2 className="font-heading font-semibold text-lg">Lead Information</h2>
          </div>

          {leads.length === 0 ? (
            <div className="p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-muted mx-auto flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground">No leads collected yet</p>
              <p className="text-sm text-muted-foreground mt-1">
                Leads will appear here when users interact with the chatbot
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Phone
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Timestamp
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {leads.map((lead, index) => (
                    <tr key={index} className="hover:bg-muted/50 transition">
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-medium text-foreground">{lead.name}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-foreground">{lead.phone}</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {formatDate(lead.timestamp)}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteLead(index)}
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
